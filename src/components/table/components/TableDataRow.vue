<template>
  <tr>
    <td
      v-for="(item, itemKey) in row"
      :key="itemKey"
    >
      <slot :name="`row-${itemKey}`">{{ item }}</slot>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { IColumn, TDefaultRow } from '../types';

interface TTRProps<T extends TDefaultRow = TDefaultRow> {
  columns?: IColumn[],
  row: T,
}

defineProps<TTRProps>();
</script>
