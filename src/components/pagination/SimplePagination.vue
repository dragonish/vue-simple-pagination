<template>
  <div class="vue-simple-pagination-frame">
    <span
      class="vue-simple-pagination-button vue-simple-pagination-previous"
      :class="{ 'vue-simple-pagination-disabled': current <= 1 }"
      :title="prevTitle || 'Previous'"
      @click="onPrev"
    >
      <svg
        id="simplePaginationPrevIcon"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <polyline points="16 20 8 12 16 4 16 4" />
      </svg>
    </span>

    <span class="vue-simple-pagination-page" :title="current + ' / ' + totalPages">
      <input
        v-model.number="current"
        class="vue-simple-pagination-input"
        type="text"
        :style="{ width: totalPages.toString().length + 3 + 'em' }"
        @keyup.enter="onSubmit()"
      />
      <span class="vue-simple-pagination-slash">/</span>
      <span class="vue-simple-pagination-total-pages">{{ totalPages }}</span>
    </span>

    <span
      class="vue-simple-pagination-button vue-simple-pagination-next"
      :class="{ 'vue-simple-pagination-disabled': current >= totalPages }"
      :title="nextTitle || 'Next'"
      @click="onNext"
    >
      <svg
        id="simplePaginationNextIcon"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <polyline points="8 4 16 12 8 20 8 20" />
      </svg>
    </span>
  </div>
</template>

<script setup lang="ts" name="SimplePagination">
import { computed } from 'vue';

/** Current page number */
const current = defineModel<number>('current', { default: 1 });

const props = defineProps<{
  /** Total number of items */
  total: number;
  /** Number of items per page */
  size: number;
  /** Previous page's hint */
  prevTitle?: string;
  /** Next page's hint */
  nextTitle?: string;
}>();

const emit = defineEmits<{
  /** Page count change event */
  change: [page: number];
}>();

const totalPages = computed(() => {
  if (props.total <= 0 || props.size <= 0) {
    return 1;
  }
  return Math.ceil(props.total / props.size);
});

function onPrev() {
  if (current.value > 1) {
    onSubmit(-1);
  }
}

function onNext() {
  if (current.value < totalPages.value) {
    onSubmit(1);
  }
}

function onSubmit(mod = 0) {
  let val = Math.round(current.value + mod) || 1;
  if (val < 1) {
    val = 1;
  } else if (val > totalPages.value) {
    val = totalPages.value;
  }

  current.value = val;
  emit('change', val);
}
</script>

<style scoped>
.vue-simple-pagination-frame {
  display: flex;
  align-items: center;
}

.vue-simple-pagination-button {
  display: inline-flex;
  cursor: pointer;
  user-select: none;
}

.vue-simple-pagination-button.vue-simple-pagination-disabled {
  cursor: not-allowed;
  color: rgba(0, 0, 0, 0.25);
}

.vue-simple-pagination-page {
  display: inline-flex;
  align-items: center;
  margin-inline-start: 0.5em;
  margin-inline-end: 0.5em;
}

.vue-simple-pagination-slash {
  margin-inline-start: 0.5em;
  margin-inline-end: 0.5em;
}

.vue-simple-pagination-input {
  box-sizing: border-box;
  text-align: center;
  font-size: 1em;
  padding: 0 4px;
  border: 1px solid #000000;
  border-radius: 4px;
  outline: none;
  color: inherit;
  background-color: #ffffff;
}
input.vue-simple-pagination-input:focus {
  border-color: #213181;
  box-shadow: 0 0 1px 1px #213181;
}

@media (prefers-color-scheme: dark) {
  .vue-simple-pagination-input {
    border: 1px solid #dfdfdf;
    background-color: #121212;
  }

  .vue-simple-pagination-button.vue-simple-pagination-disabled {
    color: rgba(255, 255, 255, 0.25);
  }
}
</style>
