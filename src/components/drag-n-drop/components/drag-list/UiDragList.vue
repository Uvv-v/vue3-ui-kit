<template>
  <div
    ref="rootRef"
    :class="[
      'ui-drag-list',
      { 'ui-drag-list__horizontal': orientation === 'horizontal' },
      { 'ui-drag-list__vertical': orientation === 'vertical' },
    ]"
    @mouseup="onMsUp"
  >
    <div
      v-for="box in boxes"
      :key="box.id"
      class="box-holder"
      @mousedown="onMsDown($event, box)"
    >
      <div
        :ref="(el) => { boxRefs[box.id] = el }"
        :class="['box', { 'box_active': currentBox === box }]"
        :style="currentBox === box ? activeBoxStyle : undefined"
      >
        {{ box.id }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { getASupersetBRatio, IBound } from '../../utils/bound/bound';

interface IDragListProps {
  orientation?: 'horizontal' | 'vertical',
}

withDefaults(defineProps<IDragListProps>(), {
  orientation: 'horizontal',
});

const rootRef = ref<any>(null);
const boxRefs = ref<any>({});

type TBox = { id: number | symbol };
const boxes = ref<TBox[]>([{ id: 1, }, { id: 2, }, { id: 3, }, { id: 4, }]);

const switchBoxes = (from: TBox, to: TBox) => {
  const fromIndex = boxes.value.indexOf(from);
  const toIndex = boxes.value.indexOf(to);
  boxes.value.splice(fromIndex, 1);
  boxes.value.splice(toIndex, 0, from);
};

const getClosestBox = (box: TBox, boxes: TBox[]) => {
  const bounds = boxes.reduce((acc, _box) => {
    const el = boxRefs.value[_box.id];
    const bcr = el.getBoundingClientRect();

    acc[_box.id] = {
      x: bcr.x,
      y: bcr.y,
      w: bcr.width,
      h: bcr.height,
    };

    return acc;
  }, {} as Record<TBox['id'], IBound>);

  const closets = { box: box, ratio: 0 };

  console.group();
  boxes.forEach((_box) => {
    if (box.id === _box.id) return;

    const ratio = getASupersetBRatio(bounds[box.id], bounds[_box.id]);

    console.log(box.id, _box.id, ratio);
    if (closets.ratio < ratio) {
      closets.box = _box;
      closets.ratio = ratio;
    }
  });
  console.groupEnd();

  if (closets.ratio < 0.5) return box;

  return closets.box;
};

/*#region MOUSE*/
type TVector2D = { x: number, y: number };
const currentBox = ref<any>(null);

const currentBoxOffset = ref<TVector2D>({ x: 0, y: 0 });
const msDownOffset = ref<TVector2D>({ x: 0, y: 0 });

const onMsDown = (ev: any, box: TBox) => {
  currentBox.value = box;

  msDownOffset.value = {
    x: ev.offsetX,
    y: ev.offsetY,
  };
  onMsMove(ev);
};

const onMsMove = (ev: any) => {
  if (currentBox.value) {
    currentBoxOffset.value = {
      x: ev.clientX - msDownOffset.value.x,
      y: ev.clientY - msDownOffset.value.y,
    };
    const closest = getClosestBox(currentBox.value, boxes.value);
    if (closest !== currentBox.value) switchBoxes(currentBox.value, closest);
  }
};

const onMsUp = () => {
  currentBox.value = null;
};

const activeBoxStyle = computed(() => ({
  position: 'fixed',
  left: currentBoxOffset.value.x + 'px',
  top: currentBoxOffset.value.y + 'px',
}));

onMounted(() => {
  window.addEventListener('mousemove', onMsMove);
  window.addEventListener('mouseup', onMsUp);
});
onUnmounted(() => {
  window.removeEventListener('mousemove', onMsMove);
  window.removeEventListener('mouseup', onMsUp);
});
/*#endregion MOUSE*/
</script>

<style>
.ui-drag-list {
  position: relative;
  display: flex;
  justify-content: center;
}

.box-holder {
  width: 100px;
  height: 100px;
}

.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Averta', sans-serif;
  user-select: none;

  &.box_active {
    position: relative;
    background: red;
  }

  &.box_empty {
    background: green;
  }
}
</style>
