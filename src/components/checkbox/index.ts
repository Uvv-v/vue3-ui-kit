import { computed, Ref } from 'vue';

export { default as VCheckBox } from './VCheckBox.vue';

export const getCheckBoxGroupComputed = (checks: Ref<boolean>[]) => {
  return computed({
    get: () => {
      return checks.some(({ value }) => value);
    },
    set: (value: boolean) => {
      checks.forEach((check) => {
        check.value = value;
      });
    },
  });
};
