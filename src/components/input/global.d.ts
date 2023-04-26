import { GlobalComponentConstructor } from '../../types';
import { IInputProps } from './UiInput.vue';

export declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UiInput: GlobalComponentConstructor<IInputProps, {}>
  }
}

export {}
