<template>
  <div class="app"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',

  components: {
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
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;

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
