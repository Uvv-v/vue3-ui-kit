import { GlobalComponentConstructor } from '@/types';
import { ITableProps } from './UiTable.vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UiTable: GlobalComponentConstructor<ITableProps, {}>
  }
}

export {}
