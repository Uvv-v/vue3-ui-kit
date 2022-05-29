<template>
  <label
    :class="[
      'input',
      { 'input_focused': focused },
      { 'input_disabled': disabled },
    ]"
    @focusin="onFocusIn"
    @focusout="onFocusOut"
  >
    <span
      v-if="label"
      class="input__label"
    >{{ label }}</span>

    <input
      class="input__field"
      type="text"
      :value="modelValue"
      :disabled="disabled"
      @input="onInput"
    >
  </label>
</template>

<script setup lang="ts" name="VInput">
import { withDefaults, defineProps, defineEmits, ref } from 'vue';

withDefaults(defineProps<{
  modelValue: string,
  label?: string,
  disabled?: boolean,
}>(), {
  label: undefined,
  disabled: false,
});

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void,
}>();

const onInput = (ev: Event): void => emit(
  'update:modelValue',
  (ev?.target as HTMLInputElement).value,
);

const focused = ref(false);
const onFocusIn = (): void => {
  focused.value = true;
};
const onFocusOut = (): void => {
  focused.value = false;
};
</script>

<style lang="scss">
$focus-transition: 300ms;

.input {
  display: flex;
  flex-direction: column;

  span.input__label {
    font-size: 12px;
    transition: color $focus-transition;
  }

  input.input__field {
    padding: 8px 10px;
    font-size: 14px;

    outline: none;
    border: 1px solid black;
    border-radius: 2px;
    transition: border $focus-transition;
  }
}

.input.input_focused {
  span.input__label { color: var(--primary) }

  input.input__field { border-color: var(--primary) }
}

.input.input_disabled {
  span.input__label { color: var(--gray) }

  input.input__field { border-color: var(--gray) }
}
</style>
