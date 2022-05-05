<template>
  <div class="view">
    <span class="view__title">Inputs</span>

    <VInput v-model="input.value" />

    <ValuePreviewer
      title="modalValue"
      :value="input.value"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import VInput from '../../components/input/VInput.vue';
import ValuePreviewer from '../ValuePreviewer.vue';

export default defineComponent({
  name: 'ViewInput',

  components: { ValuePreviewer, VInput },

  setup() {
    const input = reactive({
      value: '',
    });

    return {
      input,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
