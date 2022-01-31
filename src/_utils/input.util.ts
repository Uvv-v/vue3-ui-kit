import { SetupContext, ComponentPropsOptions, PropType } from 'vue';

export type TInputProps = {
  modelValue: string,
  length: number,
};

export const inputProps: ComponentPropsOptions<TInputProps> = {
  modelValue: { type: [String] as PropType<string> },
  length: { type: Number as PropType<number> },
};

export const inputEmits = ['update:modelValue'];

export const inputSetup = (props: TInputProps, context: SetupContext) => {
  const onInput = (ev: InputEvent): void => context.emit(
    'update:modelValue',
    (ev?.target as HTMLInputElement).value,
  );

  return {
    onInput,
  };
};
