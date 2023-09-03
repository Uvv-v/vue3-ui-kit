<template>
  <table class="ui-table">
    <thead>
      <table-header-row
        v-for="(header, headerI) in headers"
        :key="headerI"
        :columns="header"
      >
        <template
          v-for="column in header"
          #[`header-${column.key}`]
        >
          <slot
            v-bind="{ header, headerI, column }"
            :name="`header-${column.key}`"
          />
        </template>
      </table-header-row>
    </thead>

    <tbody>
      <table-data-row
        v-for="(row, rowI) in rows"
        :key="rowI"
        :row="row"
      >
        <template
          v-for="column in headers[headers.length - 1]"
          #[`row-${column.key}`]
        >
          <slot
            v-bind="{ column, row }"
            :name="`row-${column.key}`"
          />
        </template>
      </table-data-row>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { convertColumnTreeToArrays } from './utils/converter/converter';
import { IColumnNode, TDefaultRow } from './types';

import TableHeaderRow from './components/TableHeaderRow.vue';
import TableDataRow from './components/TableDataRow.vue';

export interface ITableProps<T extends TDefaultRow = TDefaultRow> {
  columns?: IColumnNode | IColumnNode[],
  rows?: T[],
}

const props = withDefaults(
  defineProps<ITableProps>(),
  {
    columns: () => [],
    rows: () => [],
  },
);

const headers = computed(() => convertColumnTreeToArrays(props.columns));
</script>
