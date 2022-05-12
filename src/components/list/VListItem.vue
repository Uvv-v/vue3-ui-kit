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

<script setup lang="ts" name="VListItem">
import { defineProps, withDefaults } from 'vue';
import { TListItem, TClassProp, TStyleProp } from './types';

withDefaults(defineProps<{
  item: TListItem,
  itemI: number,
  depth: number,
  itemClass?: TClassProp,
  itemStyle?: TStyleProp,
}>(), {
  itemClass: '',
  itemStyle: '',
});
</script>

<style lang="scss" scoped>
li {
}
</style>
