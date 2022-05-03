<template>
  <div class="layout">
    <div class="layout__nav">
      <VList :items="navItems">
        <template #item="{ item }">
          <RouterLink :to="{ name: item.routeName }">
            {{ item.title }}
          </RouterLink>
        </template>
      </VList>
    </div>

    <div class="layout__content">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TListItems } from '@/components/list/types';

import VList from '@/components/list/VList.vue';

type TNavItem = {
  title: string,
  routeName: string,
};
export default defineComponent({
  name: 'Layout',

  components: { VList },

  setup() {
    const navItems: TListItems<TNavItem> = [
      { title: 'Input', routeName: 'ViewInputs' },
      { title: 'List', routeName: 'ViewLists' },
    ];

    return {
      navItems,
    };
  },
});
</script>

<style lang="scss" scoped>
.layout {
  display: flex;

  .layout__nav {}

  .layout__content {}
}
</style>
