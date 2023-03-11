<template>
  <div ref="rootRef" class="tabs">
    <div class="tabs__buttons">
      <button
        v-for="(tab, tabI) in tabs"
        :key="keySetter(tabI)"
        :ref="(el) => currentTabRefSetter(tab, el)"
        class="tabs__button"
        @click="onTabClick(tab)"
      >
        <slot name="tab" v-bind="{ tab }">{{ tab }}</slot>
      </button>
    </div>

    <div
      class="tabs__underline"
      :style="{
        left: `${underline.left}px`,
        width: `${underline.width}px`,
      }"
    />

    <div v-if="slots.content" class="tabs__content">
      <slot name="content" v-bind="{ tab: currentTab }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, defineEmits, useSlots, ref, onMounted, onUnmounted, Ref } from 'vue';
import { defaultKeySetter, TKeySetter } from '../../_utils';

type TTab = Record<string, unknown>;
type TTabs = TTab[];
type TUnderline = { left: number, width: number };

const slots = useSlots();

const props = withDefaults(defineProps<{
  currentTab: TTab,
  tabs: TTabs,
  keySetter?: TKeySetter,
}>(), {
  keySetter: (() => defaultKeySetter) as unknown as TKeySetter,
});

const emit = defineEmits<{
  (event: 'update:currentTab', tab: Record<string, unknown>): void,
}>();

const onTabClick = (tab: Record<string, unknown>) => emit('update:currentTab', tab);

/*#region UNDERLINE*/
const underline: Ref<TUnderline> = ref({ left: 0, width: 0 });
const rootRef = ref(null as unknown as HTMLElement);
const currentTabRef = ref(null as unknown as HTMLElement);

const refreshUnderline = () => {
  if (currentTabRef.value) {
    underline.value.left = currentTabRef.value.offsetLeft;
    underline.value.width = currentTabRef.value.offsetWidth;
  }
};

const currentTabRefSetter = (tab: TTab, el: HTMLElement) => {
  if (tab === props.currentTab) {
    currentTabRef.value = el;
    refreshUnderline();
  }
};

onMounted(() => {
  const resizeObserver = new ResizeObserver(refreshUnderline);
  resizeObserver.observe(rootRef.value);
  onUnmounted(resizeObserver.disconnect);
});
/*#endregion UNDERLINE*/
</script>

<style lang="scss" scoped>
$TABS_PADDING: 10px;

.tabs {
  position: relative;

  .tabs__buttons {
    .tabs__button {
      padding: $TABS_PADDING;
      font-family: 'Averta', sans-serif;
      font-size: 1rem;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }

  .tabs__underline {
    position: absolute;
    height: 4px;
    background: red;
    transition: left 300ms, width 300ms;
  }

  .tabs__content {
    padding: $TABS_PADDING;
  }
}
</style>
