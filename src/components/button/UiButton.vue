<template>
  <button
    :type="type"
    :class="[
      'ui-button',
      { 'ui-button_flat': flat },
      { 'ui-button_dense': dense },
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
export interface IButtonProps {
  type?: 'button' | 'reset' | 'submit',
  flat?: boolean,
  dense?: boolean,
}

withDefaults(
  defineProps<IButtonProps>(),
  {
    type: 'button',
    flat: false,
    dense: false,
  }
);
</script>
