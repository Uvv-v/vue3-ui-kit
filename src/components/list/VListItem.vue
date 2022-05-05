<template>
  <li
    :class="typeof itemClass === 'function' ? itemClass() : itemClass"
    :style="typeof itemStyle === 'function' ? itemStyle() : itemStyle"
  >
    <slot
      name="item"
      v-bind="{ item, itemI, depth }"
    >
      {{ item }}
    </slot>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TListItem, TClassProp, TStyleProp } from './types';

export default defineComponent({
  name: 'VListItem',

  props: {
    item: { type: Object as PropType<TListItem>, required: true },
    itemI: { type: Number, required: true },
    depth: { type: Number, required: true },

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
li {
}
</style>
