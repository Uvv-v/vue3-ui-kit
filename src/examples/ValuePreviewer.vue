<template>
  <div class="view__value-preview">
    <span class="value-preview__title">{{ title }}</span>
    <span class="value-preview__value">{{ value }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ValuePreviewer',

  props: {
    title: { type: String, default: 'value' },
    value: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.view__value-preview {
  border: 1px solid var(--light-gray);

  .value-preview__title {
    display: inline-block;
    padding: 5px;
    background: var(--light-gray);
  }

  .value-preview__value {
    display: inline-block;
    padding: 5px;
  }
}
</style>
