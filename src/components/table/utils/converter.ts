import { TColumnDef } from '../types';

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

export const convertColumnDefToArrays = (columnDef: TColumnDef): (Omit<TColumnDef, 'children'>)[][] => {
  const columnsDefBranches = getColumnDefBranches(getGrownColumnDef(columnDef));
  const result: ReturnType<typeof convertColumnDefToArrays> = [];

  const fn = (cDef: TColumnDef, depth = 0): void => {
    const { children, ...column } = cDef;
    if (!result[depth]) result[depth] = [];
    result[depth].push(column);

    children?.forEach((el) => fn(el, depth + 1));
  };

  columnsDefBranches.forEach((el) => fn(el));

  return result;
};
