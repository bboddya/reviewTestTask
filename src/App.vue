<template>
  <div class="main">
    <item-list :items="data" class="sidebar" @click-link="clickLink" />
    <item-content v-if="selectedItem" :item="selectedItem" @add-field="addField" />
  </div>
</template>

<script setup lang="ts">
import ItemList from './components/ItemList.vue';
import ItemContent from './components/ItemContent.vue';

// moved to store dir
import Data from './store/mockData';
import { ref } from 'vue';
import { Attribute, Product } from './types/types';

// added Product arr interface
const data = ref<Product[]>(Data);

// added Product interface
const selectedItem = ref<Product>();

// made object instead switch
const attributeCases: { [key: string]: Attribute } = {
  color: {
    code: 'new code',
    name: 'new field',
    color: 'color',
  },
  size: {
    code: 'new code',
    name: 'new field',
    size: {
      width: 0,
      height: 0,
    },
  },
  weight: {
    code: 'new code',
    name: 'new field',
    weight: 0,
  },
};

// find item for content
const clickLink = (selectedId: number) => {
  selectedItem.value = data.value.find((item: Product) => item.id === selectedId);
};

// push new field
const addField = (e: string) => selectedItem.value?.attributes.push(attributeCases[e]);
</script>

<style scoped lang="css">
.main {
  display: flex;
  gap: 20px;
}
.sidebar {
  width: auto;
}
</style>
