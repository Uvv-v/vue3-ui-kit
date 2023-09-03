import { ComponentPublicInstance, Plugin } from 'vue';
import * as c from './components';

export * from './_utils';
export * from './components';

export const uiPlugin: Plugin = {
  install(app) {
    app.component('UiButton', c.UiButton);
    app.component('UiInput', c.UiInput);
    app.component('UiCheckBox', c.UiCheckBox);
    app.component('UiTable', c.UiTable);
  },
};

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UiButton: ComponentPublicInstance<typeof c.UiButton>;
    UiInput: ComponentPublicInstance<typeof c.UiInput>;
    UiCheckBox: ComponentPublicInstance<typeof c.UiCheckBox>;
    UiTable: ComponentPublicInstance<typeof c.UiTable>;
  }
}
