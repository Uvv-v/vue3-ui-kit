export type TColumnOptions = {
  width?: number,
  className?: string,
}

export type TColumn<K extends string = string> = {
  label: string,
  key: K,
  options?: TColumnOptions,
  children?: never,
};

export type TGroupColumn<K extends string = string> = {
  label?: string,
  key?: never,
  options?: TColumnOptions,
  children: TColumnDef<K>[],
};

export type TColumnDef<K extends string = string> = TColumn<K> | TGroupColumn<K>;

export type TRowDef<K extends string = string> = Record<K, unknown>;
