<template>
  <table class="ui-table">
    <thead>
      <TableHeader
        v-for="(column, columnI) in headers"
        :key="columnI"
        :columns-tree="column"
      />
    </thead>

    <tbody>
      <TableRow
        v-for="(row, rowI) in rowDef"
        :key="rowI"
        :row="row"
      />
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { TColumnDef, TRowDef } from './types';
import TableHeader from './components/TableHeader.vue';
import TableRow from './components/TableRow.vue';
import { computed } from 'vue';
import { convertColumnDefToArrays } from './utils/converter';

export interface ITableProps {
  columnsDef?: TColumnDef,
  rowDef: TRowDef,
}

const props = withDefaults(
  defineProps<ITableProps>(),
  {
    columnsDef: () => ({ children: [] }),
    rowDef: () => [],
  },
);

const headers = computed(() => {
  const res = convertColumnDefToArrays(props.columnsDef);
  console.log(res);
  return res;
});
</script>
