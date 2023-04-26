import { Plugin } from 'vue';
import * as c from './components';

export * from './_utils';
export * from './components';

export const uiPlugin: Plugin = {
  install(app) {
    app.component('UiInput', c.UiInput);
    app.component('UiCheckBox', c.UiCheckBox);
    app.component('UiTable', c.UiTable);
  },
};
