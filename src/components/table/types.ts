export type TColumnOptions = {
  width?: number,
  className?: string,
}

export type TColumnDef<K extends string = string> = {
  label: string,
  key: K,
  options?: TColumnOptions,
  children?: TColumnDef<K>[],
}

export type TColumnTreeDef<K extends string = string> = {
  children: TColumnDef<K>[],
}

export type TRowDef<K extends string = string> = Record<K, unknown>;

export type TColumn<K extends string = string> = Omit<TColumnDef<K>, 'children'>;
