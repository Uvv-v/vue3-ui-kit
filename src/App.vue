<template>
  <div class="app">
    <ViewInputs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ViewInputs from '@/examples/views/ViewInputs.vue';

export default defineComponent({
  name: 'App',

  components: {
    ViewInputs
  },

  setup() {
    return {
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
  .icon {
    transition: all 500ms;
    transition-timing-function: ease-in-out;
    fill: white;
    stroke: gray;
    color: gray;

    &:hover {
      fill: orange;
      stroke: orange;
      color: white;
    }
  }
}
</style>
