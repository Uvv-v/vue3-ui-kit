<template>
  <label
    :class="[
      'checkbox',
      { 'checkbox_disabled': disabled },
    ]"
    :data-type="type"
  >
    <slot name="prev" />

    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="onChange"
    >

    <span class="checkbox__box" />

    <slot name="default" />
  </label>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from 'vue';
import { TCheckBoxType } from './types';

withDefaults(defineProps<{
  modelValue: boolean,
  type: TCheckBoxType,
  disabled: boolean,
}>(), {
  type: 'regular',
  disabled: false,
});

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void,
}>();

const onChange = (ev: Event) => {
  emit('update:modelValue', (ev?.target as HTMLInputElement).checked);
};
</script>

<style lang="scss" scoped>
label.checkbox {
  display: flex;
  gap: 10px;
  user-select: none;

  span.checkbox__box {
    position: relative;
    width: 22px;
    height: 22px;
    border: 1.5px solid currentColor;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  input[type='checkbox'] {
    display: none;

    &:checked ~ span.checkbox__box {
      color: var(--primary);
    }

    &:not(:checked) ~ span.checkbox__box {
      &::before, &::after {
        width: 0;
        height: 0;
        opacity: 0;
      }
    }
  }
}

label.checkbox[data-type='regular'] span.checkbox__box {
  &::before, &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 1.5px;
    border-radius: 1.5px;
    background: currentColor;
    transition: all 200ms;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
}

label.checkbox[data-type='group'] span.checkbox__box {
  &::before {
    content: '';
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 1.5px;
    background: currentColor;
    transition: all 200ms;
  }
}

.checkbox.checkbox_disabled {
  color: var(--gray);

  .checkbox__box {
    color: var(--gray) !important;
  }
}
</style>
