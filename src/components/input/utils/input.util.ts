import { ComponentPropsOptions, SetupContext } from 'vue';
import { ObjectWith } from '../../../_utils/types';

export type TInputProps = {
  modelValue: string,
  length: number,

  label: string,
};

export type TInputEmits = ('update:modelValue')[];

export const inputProps: ComponentPropsOptions<TInputProps> = {
  modelValue: { type: String },
  length: { type: Number },

  label: { type: String },
};

export const inputEmits: TInputEmits = ['update:modelValue'];

export const inputSetup = (props: ObjectWith<TInputProps>, context: SetupContext<TInputEmits>) => {
  const onInput = (ev: Event): void => context.emit(
    'update:modelValue',
    (ev?.target as HTMLInputElement).value,
  );

  return {
    onInput,
  };
};
