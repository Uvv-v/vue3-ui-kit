import { IColumn, IColumnNode, TDefaultRow } from '../../types';

const getDepth = <T extends TDefaultRow>(node: IColumnNode<T>, depth = 1): number => {
  if (node.children?.length) return node.children.reduce(
    (acc, el) => {
      const a = getDepth(el, depth + 1);
      if (acc < a) acc = a;
      return acc;
    },
    depth,
  );
  return depth;
};

const collectColspan = <T extends TDefaultRow>(
  node: IColumnNode<T>,
  collection: Record<keyof T, number> = {} as Record<keyof T, number>,
  affectedNodeKeys: (keyof T)[] = [],
): Record<keyof T, number> => {
  if (node.children?.length) {
    collection[node.key] = 0;
    const nextAffectedNodeKeys = [...affectedNodeKeys, node.key];
    node.children.forEach((childNode) => {
      collectColspan(childNode, collection, nextAffectedNodeKeys);
    });
  } else {
    collection[node.key] = 1;
    affectedNodeKeys.forEach((key) => {
      collection[key] += 1;
    });
  }
  return collection;
};

const collectRowspan = <T extends TDefaultRow>(
  node: IColumnNode<T>,
  maxDepth: number,
  collection: Record<keyof T, number> = {} as Record<keyof T, number>,
  depth = 0,
): Record<keyof T, number> => {

  if (node.children?.length) {
    collection[node.key] = 1;
    node.children.forEach((childNode) => {
      collectRowspan(childNode, maxDepth, collection, depth + 1);
    });
  } else {
    collection[node.key] = maxDepth - depth;
  }

  return collection;
};

const collectRows = <T extends TDefaultRow>(
  node: IColumnNode<T>,
  colspanCollection: Record<keyof T, number>,
  rowspanCollection: Record<keyof T, number>,
  collection: IColumn<T>[][] = [],
  depth = 0,
): IColumn<T>[][] => {
  const column: IColumn<T> = {
    label: node.label,
    key: node.key,
    colspan: colspanCollection[node.key],
    rowspan: rowspanCollection[node.key],
  };

  if (collection.length <= depth) {
    collection.push([column]);
  } else {
    collection[depth].push(column);
  }

  if (node.children?.length) {
    node.children.forEach((childNode) => {
      collectRows(childNode,colspanCollection, rowspanCollection, collection, depth + 1);
    });
  }
  return collection;
};

export const convertColumnTreeToArrays = <T extends TDefaultRow>(
  columns: IColumnNode<T> | IColumnNode<T>[],
): IColumn<T>[][] => {
  let node: IColumnNode<T>;
  if (columns instanceof Array) {
    const rootKey = Symbol('root');
    node = { key: rootKey, children: columns };
  } else {
    node = columns;
  }

  const depth = getDepth<T>(node);
  const colspan = collectColspan<T>(node);
  const rowspan = collectRowspan<T>(node, depth);
  const rows = collectRows<T>(node, colspan, rowspan);

  return (columns instanceof Array) ? rows.splice(1) : rows;
};
