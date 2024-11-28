<template>
  <simple-pagination v-model:current="page" :total="110" :size="25" @change="onPageChange"></simple-pagination>
  <div>
    <p>input value: {{ page }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const page = ref(1);

function onPageChange(p: number) {
  console.info('page:', p);
}
</script>
