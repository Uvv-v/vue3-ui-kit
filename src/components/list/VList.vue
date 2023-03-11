<template>
  <ul>
    <VListItem
      v-for="(item, itemI) in items"
      v-bind="{ item, itemI, depth, itemClass, itemStyle }"
      :key="`${depth}_${itemI}`"
    >
      <template
        #item="propItem"
      >
        <slot
          name="item"
          v-bind="propItem"
          :number="`${itemI + 1}`"
        >
          {{ item }}
        </slot>

        <VList
          v-if="item[childrenKey]"
          v-bind="{ childrenKey, depth: depth + 1, itemClass, itemStyle }"
          :items="item[childrenKey]"
          style="margin-left: 15px;"
        >
          <template #item="propChildItem">
            <slot
              name="item"
              v-bind="propChildItem"
              :number="`${itemI + 1}.${propChildItem.number}`"
            />
          </template>
        </VList>
      </template>
    </VListItem>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { TClassProp, TStyleProp,TListItems } from './types';

import VListItem from './VListItem.vue';

withDefaults(defineProps<{
  items: TListItems,
  childrenKey?: string,
  depth?: number,
  itemClass?: TClassProp,
  itemStyle?: TStyleProp,
}>(), {
  childrenKey: 'children',
  depth: 0,
  itemClass: '',
  itemStyle: '',
});
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
}
</style>
