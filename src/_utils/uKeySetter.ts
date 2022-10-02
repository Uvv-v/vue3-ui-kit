export type TKeySetter = (index: number) => number | string | symbol;

export const defaultKeySetter: TKeySetter = (index) => index;
