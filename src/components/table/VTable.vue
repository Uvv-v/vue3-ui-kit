<template>
  <div>
    <AgGridVue
      style="width: 100%; height: 500px"
      class="ag-theme-balham"
      :column-defs="columnDefs"
      :row-data="rowData"
      @grid-ready="onGridReady"
    />
    <span>{{ rowData[0].price }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"

export default defineComponent({
  name: 'VTable',

  components: {
    AgGridVue,
  },

  setup: function () {
    const columnDefs = reactive([
      { headerName: "Make", field: "make" },
      {
        headerName: "Model",
        field: "model",
        children: [
          {
            headerName: "Submodule",
            field: "submodule",
            children: [
              { headerName: "P1", field: "p1" },
              { headerName: "P2", field: "p2", editable: true },
            ],
          },
          {
            headerName: "P",
            field: "p",
            children: [
              { headerName: "P3", field: "p3" },
            ],
          },
        ],
      },
      { headerName: "Price", field: "price" },
    ])

    const rowData = ref([
      { make: "Toyota", model: "Celica", price: 35000, p2: '123' },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
    ]);

    const grid = reactive({
      api: null,
      columnsApi: null,
    });
    const onGridReady = (params: any) => {
      grid.api = params.api
      grid.columnsApi = params.columnApi
    }

    setInterval(() => {
      rowData.value[0].price = Math.round(Math.random() * 1000)

      grid.api.refreshCells()
    }, 250)

    return {
      columnDefs,
      rowData,
      onGridReady,
    }
  },
})
</script>

<style lang="scss">
</style>
