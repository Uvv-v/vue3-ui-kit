<template>
  <tr>
    <td
      v-for="(item, itemI) in row"
      :key="itemI"
    >
      <slot>{{ item }}</slot>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TRowDef } from '../types';

export default defineComponent({
  name: 'TableRow',

  props: {
    columnDefs: { type: Array as PropType<string[]>, required: true },
    row: { type: Object as PropType<TRowDef>, required: true },
  },

  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
</style>
