export type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]:
  TObj[TKey] extends any[] ? `${TKey}` :
    TObj[TKey] extends object
      ? `${TKey}` | `${RecursiveKeyOf<TObj[TKey]>}`
      : `${TKey}`;
}[keyof TObj & (string | number)];

export type TDefaultRow = Record<string | symbol, unknown>;

export interface IColumnNode<T extends TDefaultRow = TDefaultRow> {
  key: RecursiveKeyOf<T> | string,
  label?: string,
  children?: IColumnNode<T>[],
}

export interface IColumn<T extends TDefaultRow = TDefaultRow> {
  key: RecursiveKeyOf<T> | string,
  label?: string,
  colspan: number,
  rowspan: number,
}
