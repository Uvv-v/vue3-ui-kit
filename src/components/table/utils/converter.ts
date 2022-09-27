import { TColumnDef, TResultColumn } from '../types';

export const getColumnDefBranches = (columnDef: TColumnDef): TColumnDef[] => {
  const fn = (cDef: TColumnDef): TColumnDef[] => {
    if (!cDef.children) return [cDef];
    return cDef.children
      .reduce(
        (acc, el) => [
          ...acc,
          ...fn(el).map((e) => ({ ...cDef, children: [e] })),
        ],
        [] as TColumnDef[],
      );
  };
  return fn(columnDef);
};

export const getColumnDefDepth = (columnDef: TColumnDef, initialDepth = 0): number => {
  if (columnDef.children) return columnDef.children
    .reduce((acc, el) => {
      const d = getColumnDefDepth(el, initialDepth + 1);
      return d > acc ? d : acc;
    }, initialDepth);
  return initialDepth;
};

export const getGrownColumnDef = (columnDef: TColumnDef): TColumnDef => {
  const columnDefDepth = getColumnDefDepth(columnDef);

  const fn = (cDef: TColumnDef, depth: number): TColumnDef => {
    if (!cDef.children) {
      if (columnDefDepth === depth) return cDef;
      return { children: [fn(cDef, depth + 1)] };
    }
    return {
      ...cDef,
      children: cDef.children.map((el) => fn(el, depth + 1)),
    };
  };

  return fn(columnDef, 0);
};

export const convertColumnDefToArrays = (columnDef: TColumnDef): TResultColumn[][] => {
  const columnsDefBranches = getColumnDefBranches(getGrownColumnDef(columnDef));
  const result: ReturnType<typeof convertColumnDefToArrays> = [];

  const fn = (cDef: TColumnDef, depth = 0): void => {
    const { children, ...column } = cDef;
    if (!result[depth]) result[depth] = [];
    result[depth].push(column);

    children?.forEach((el) => fn(el, depth + 1));
  };

  columnsDefBranches.forEach((el) => fn(el));

  for (let rowI = 0; rowI < result.length - 1; rowI++) {
    let prevLabel = result[rowI][0].label;
    for (let columnI = 1; columnI < result[rowI].length; columnI++) {
      if (prevLabel === result[rowI][columnI].label) {
        result[rowI].splice(columnI, 1);
        columnI--;
        result[rowI][columnI].colspan = Number(result[rowI][columnI].colspan || 1) + 1;
      } else {
        prevLabel = result[rowI][columnI].label;
      }
    }
  }

  return result;
};
