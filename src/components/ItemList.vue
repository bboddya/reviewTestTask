<template>
  <!-- div -> nav -->
  <nav class="list">
    <!-- deleted index -->
    <!-- added id in key tag -->
    <span
      v-for="item in items"
      :key="item.id"
      class="item"
      :class="{ itemSelected: item.id === selectedItem }"
      @click="onClick(item.id)"
    >
      {{ item.name }}
    </span>
  </nav>
</template>

<script setup lang="ts">
import { Nav } from '@/types/types';
import { defineProps, defineEmits, ref } from 'vue';

// change props type
defineProps<{
  items: Nav[];
}>();

const emit = defineEmits(['clickLink']);

const selectedItem = ref();

const onClick = (id: number) => {
  selectedItem.value = id;
  emit('clickLink', id);
};
</script>

<style lang="css">
.list {
  display: flex;
  flex-direction: column;
  border: 1px solid lightblue;
}

.item {
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  min-width: 250px;
}

.itemSelected {
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  min-width: 250px;
  background: lightskyblue;
}

.item:hover {
  background: #f0f0ff;
}
</style>
