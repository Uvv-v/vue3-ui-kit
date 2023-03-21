export type TValidator = (value: any, data?: Record<string, any>) => boolean;

export const useValidate = <T extends Record<string, any>>(data: T, validators: Record<keyof T, TValidator>) => {
  return Object
  .keys(validators)
  .reduce(
    (acc, key) => acc && validators[key as keyof T](data[key as keyof T], data),
    true,
  );
};
