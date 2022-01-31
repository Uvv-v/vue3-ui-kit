<template>
  <label class="input-wrap">
    <input
      type="text"
      :value="modelValue"
      @input="onInput"
    >
  </label>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue';
import { inputProps, inputEmits, inputSetup, TInputProps } from '../../_utils/input.util';

export default defineComponent({
  name: 'VInput',

  props: { ...inputProps },

  emits: [...inputEmits],

  setup(props, context) {
    return {
      ...inputSetup(props as TInputProps, context as SetupContext),
    };
  },
});
</script>

<style lang="scss" scoped>
.input-wrap {
  padding: 10px 10px;
  border: 1px solid black;
  border-radius: 2px;

  input {
    border: none;
    outline: none;
  }
}
</style>
