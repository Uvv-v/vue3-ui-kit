<template>
  <label class="input">
    <span class="input__label">{{ label }}</span>

    <input
      class="input__field"
      type="text"
      :value="modelValue"
      @input="onInput"
    >
  </label>
</template>

<script setup lang="ts" name="VInput">
import { defineProps, defineEmits } from 'vue';

defineProps<{
  modelValue: string,
  label: string,
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void,
}>();

const onInput = (ev: Event): void => emit(
  'update:modelValue',
  (ev?.target as HTMLInputElement).value,
);
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;

  font-family: sans-serif;

  span.input__label {
    font-size: 12px;
  }

  input.input__field {
    padding: 8px 10px;
    font-size: 14px;

    outline: none;
    border: 1px solid black;
    border-radius: 2px;
  }
}
</style>
