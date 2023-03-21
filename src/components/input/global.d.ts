import { GlobalComponentConstructor } from '@/types';
import { IInputProps } from '@/plugins/ui.plugin/components/input/ui-input.vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UiInput: GlobalComponentConstructor<IInputProps, {}>
  }
}

export {}
