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

<script lang="ts">
import { defineComponent } from 'vue';
import { inputProps, inputEmits, inputSetup } from '@/_utils/input.util';

export default defineComponent({
  name: 'VInput',

  props: inputProps,

  emits: inputEmits,

  setup(props, context) {
    return {
      ...inputSetup(props, context),
    };
  },
});
</script>

<style lang="scss" scoped>
.input {
  padding: 8px 10px;
  border: 1px solid black;
  border-radius: 2px;

  input.input__field {
    border: none;
    outline: none;
    font-size: 18px;
    width: 100%;
  }
}
</style>
