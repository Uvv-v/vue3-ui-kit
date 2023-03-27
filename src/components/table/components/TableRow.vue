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

<script setup lang="ts">
import { TColumnDef, TRowDef } from '../types';

defineProps<{
  columnsDef?: TColumnDef,
  row: TRowDef[number],
}>();
</script>

<style lang="scss" scoped>
</style>
