# vue-simple-pagination

A simple Vue pagination component.

## Preview

![pagination](https://gcore.jsdelivr.net/gh/dragonish/images@main/img/202411282338779.gif)

## Installation

```sh
npm install @dragonish/vue-simple-pagination
```

## Usage

in `.js`/`.ts` file:

```typescript
import SimplePagination from '@dragonish/vue-simple-pagination';

// ...
app.use(SimplePagination)
// ...
```

in `.vue` file:

```html
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
```

### Props

| name | type | description |
| :--: | :--: | ----------- |
| `current(v-model)` | `number` | Current page number |
| `total` | `number` | Total number of items |
| `size` | `number` | Number of items per page |
| `prevTitle` | `string \| undefined` | Previous page's hint |
| `nextTitle` | `string \| undefined` | Next page's hint |

### Emits

| name | declaration | description |
| :--: | ----------- | ----------- |
| `change` | `(page: number) => void` | Page count change event |

## License

[MIT](./LICENSE)
