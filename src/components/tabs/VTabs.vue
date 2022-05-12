<template>
  <div class="tabs">
    <div class="tabs__buttons">
      <button
        v-for="(tab, tabI) in tabs"
        :key="tabI"
        @click="onTabClick(tab)"
      >
        <slot
          name="tab"
          v-bind="{ tab }"
        >
          {{ tab }}
        </slot>
      </button>
    </div>

    <div
      v-if="slots.content"
      class="tabs__content"
    >
      <slot
        name="content"
        v-bind="{ tab: currentTab }"
      />
    </div>
  </div>
</template>

<script setup lang="ts" name="VTabs">
import { defineProps, defineEmits, useSlots } from 'vue';

const slots = useSlots();

defineProps<{
  currentTab: Record<string, unknown>,
  tabs: [],
}>();

const emit = defineEmits<{
  (event: 'update:currentTab', tab: Record<string, unknown>): void,
}>();

const onTabClick = (tab: Record<string, unknown>) => emit('update:currentTab', tab);
</script>
