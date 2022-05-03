<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',

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
