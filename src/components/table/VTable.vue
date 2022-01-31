<template>
  <div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'VTable',

  components: {
  },

  setup: function () {
    const columnDefs = reactive([
      { headerName: 'Make', field: 'make' },
      {
        headerName: 'Model',
        field: 'model',
        children: [
          {
            headerName: 'Submodule',
            field: 'submodule',
            children: [
              { headerName: 'P1', field: 'p1' },
              { headerName: 'P2', field: 'p2', editable: true },
            ],
          },
          {
            headerName: 'P',
            field: 'p',
            children: [
              { headerName: 'P3', field: 'p3' },
            ],
          },
        ],
      },
      { headerName: 'Price', field: 'price' },
    ]);

    const rowData = ref([
      { make: 'Toyota', model: 'Celica', price: 35000, p2: '123' },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
    ]);

    return {
      columnDefs,
      rowData,
    };
  },
});
</script>

<style lang="scss">
</style>
