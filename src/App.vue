<template>
  <div class="app">
    <VInput v-model="value" />
    <p>{{ value }}</p>

    <VTable />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import VInput from './components/input/VInput.vue';
import VTable from './components/table/VTable.vue';

export default defineComponent({
  name: 'App',

  components: {
    VInput,
    VTable,
  },

  setup() {
    return {
      value: ref('123'),
    };
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
