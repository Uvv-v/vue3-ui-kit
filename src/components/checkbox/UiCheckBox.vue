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
  type?: TCheckBoxType,
  disabled?: boolean,
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
