<template>
  <div class="content">
    <!-- span -> header -->
    <header class="header">{{ item.name }}</header>

    <!-- change v-for -->
    <div class="detail" v-for="(attr, index) in item.attributes" :key="index">
      <div class="field" v-for="(field, name) in attr" :key="name">
        <span class="title">{{ name }}</span>

        <template v-if="typeof field === 'object'">
          <span class="input__wrap" v-for="(input, inputName) in field" :key="inputName">
            <input class="input" :value="input" type="number" />
          </span>
        </template>

        <template v-else>
          <input :value="field" :type="typeof field === 'number' ? 'number' : 'text'" />
        </template>
      </div>
    </div>

    <div class="add">
      <label>
        type
        <select ref="selectRef">
          <!-- added v-for for options -->
          <option v-for="(opt, idx) in options" :key="idx" :value="opt">{{ opt }}</option>
        </select>
      </label>

      <!-- added condition -->
      <button @click="emit('addField', selectRef?.value)">Add</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/types/types';
import { defineProps, defineEmits, ref } from 'vue';

// changed props
defineProps<{ item: Product }>();

const emit = defineEmits(['addField']);
const selectRef = ref<HTMLSelectElement>();
const options = ref<string[]>(['color', 'size', 'weight']);
</script>

<style scoped lang="css">
.header {
  font-weight: bold;
}
.content {
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
}
.detail {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.field {
  display: flex;
  gap: 5px;
}
.title {
  font-weight: bold;
}
.add {
  display: flex;
  gap: 10px;
}
.input:not(:last-child) {
  margin-right: 20px;
}

/* added x between inputs */
.input__wrap {
  position: relative;
  margin-right: 20px;
}

.input__wrap:not(:last-child)::after {
  content: 'x';
  position: absolute;
  right: -16px;
  top: 50%;
  transform: translateY(-50%);
}
/* added x between inputs */
</style>
