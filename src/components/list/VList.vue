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

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TClassProp, TStyleProp,TListItems } from './types';

import VListItem from './VListItem.vue';

export default defineComponent({
  name: 'VList',

  components: { VListItem },

  props: {
    items: { type: Array as PropType<TListItems>, required: true },
    childrenKey: { type: String, default: 'children' },

    depth: { type: Number, default: 0 },

    itemClass: {
      type: [String, Object, Function] as PropType<TClassProp>,
      default: '',
    },
    itemStyle: {
      type: [String, Object, Function] as PropType<TStyleProp>,
      default: '',
    },
  },

  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
}
</style>
