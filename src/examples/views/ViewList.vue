<template>
  <div class="view">
    <span class="view__title">List</span>

    <VList
      :items="items"
    >
      <template #item="{ item, number, depth }">
        <span
          :style="{
            fontSize: depth === 0 ? '1.2rem' : '1rem',
            display: 'flex',
            gap: '10px',
            marginBottom: '10px',
          }"
        >
          <span>{{ number }}.</span>
          <span>{{ item.title }}</span>
          <span style="color: red; font-size: 1rem">[depth = {{ depth }}]</span>
        </span>
      </template>
    </VList>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { TListItems } from '../../components/list/types';

import VList from '../../components/list/VList.vue';

export default defineComponent({
  name: 'ViewList',

  components: { VList },

  setup() {
    const items = reactive<TListItems<{ title: string }>>([
      {
        title: 'Section A',
        children: [
          { title: 'Subsection A' },
          { title: 'Subsection B' },
        ],
      },
      {
        title: 'Section B',
        children: [
          {
            title: 'Subsection C',
            children: [
              { title: 'Item A' },
            ],
          },
        ],
      },
      {
        title: 'Section C',
        children: [
          { title: 'Subsection D' },
        ],
      },
    ]);

    return {
      items,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
