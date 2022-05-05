<template>
  <table>
    <thead>
<!--      <TableHeader-->
<!--        :columns-tree="[1, 2, 3]"-->
<!--      />-->
    </thead>

    <tbody>
<!--      <TableRow-->
<!--        v-for="(row, rowI) in rows"-->
<!--        :key="rowI"-->
<!--        :row="row"-->
<!--      />-->
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

// import TableRow from '@/components/table/components/TableRow.vue';
// import TableHeader from '@/components/table/components/TableHeader.vue';
import { TColumnDef, TRowDef } from './types';

export default defineComponent({
  name: 'VTable',

  components: {
    // TableHeader,
    // TableRow,
  },

  props: {
    columnDef: { type: Object as PropType<TColumnDef>, default: () => ({ children: [] }) },
    rows: { type: Array as PropType<TRowDef[]>, default: () => [] },
  },

  setup() {
    return {
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
