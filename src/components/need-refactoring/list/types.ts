export type TDefaultListItem = Record<string, unknown>;
export type TDefaultListItemChildrenKey = 'children';

export type TListItem<ITEM = TDefaultListItem,
  CHILD_KEY extends string = TDefaultListItemChildrenKey> =
  ITEM & Partial<Record<CHILD_KEY, TListItems<ITEM, CHILD_KEY>>>;

export type TListItems<ITEM = TDefaultListItem,
  CHILD_KEY extends string = TDefaultListItemChildrenKey> =
  TListItem<ITEM, CHILD_KEY>[];

type TClass = string | Record<string, string>;
export type TClassProp = TClass | (() => TClass);

type TStyle = string | Record<string, string | number>;
export type TStyleProp = TStyle | (() => TStyle);
