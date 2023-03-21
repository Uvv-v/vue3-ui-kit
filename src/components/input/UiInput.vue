<template>
  <label
    :class="[
      'ui-input input',
      { 'input_invalid': !isValid },
    ]"
  >
    <span v-if="label" class="input__label">{{ label }}</span>

    <input
      v-bind="$attrs"
      :value="modelValue"
      class="input__field"
      @input="onInput"
    >
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { TValidator } from '../../_utils/validator';

/*#region Types*/
export interface IInputProps {
  modelValue: string,
  label?: string,
  validator?: TValidator,
}
/*#endregion Types*/

const props = defineProps<IInputProps>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void,
}>();

const isValid = computed(() => !props.validator || props.validator(props.modelValue));

const onInput = (ev: Event) => {
  emit('update:modelValue', (ev.target as HTMLInputElement).value);
};
</script>
