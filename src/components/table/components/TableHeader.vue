<template>
  <tr>
    <th
      v-for="(hRow, hRowI) in columns"
      :key="hRowI"
      :colspan="hRow.colspan"
    >
      {{ hRow.label }}
    </th>
  </tr>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'TableHeader',

  props: {
    columnsTree: { type: Array, default: () => [] },
  },

  setup(props) {
    const columns = computed(() => {
      return props.columnsTree;
    });

    return {
      columns,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
