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
import { defineComponent } from 'vue';
import { inputProps, inputEmits, inputSetup } from '../../_utils/input.util';

export default defineComponent({
  name: 'VInput',

  props: { ...inputProps },

  emits: [...inputEmits],

  setup(props, context) {
    return {
      ...inputSetup(props, context),
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
