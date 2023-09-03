<template>
  <tr>
    <th
      v-for="(column, columnI) in columns"
      :key="columnI"
      :colspan="column.colspan"
      :rowspan="column.rowspan"
    >
      <slot
        v-bind="{ column }"
        :name="`header-${column.key}`"
      >
        {{ column.label }}
      </slot>
    </th>
  </tr>
</template>

<script setup lang="ts">
// import { defineEmits } from 'vue';
import { IColumn } from '../types';

defineProps<{
  columns: IColumn[]
}>();

// const emits = defineEmits<{
//   (event: 'test', value: string): void,
// }>();
</script>
