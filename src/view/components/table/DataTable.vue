<script setup lang="ts">
import type { Weapon } from '@/model/model/Weapon'

withDefaults(
  defineProps<{ headers: Array<String>, data: Array<Weapon> }>(),
  {}
)
</script>

<template>
  <table>
    <tr>
      <template v-for="header in headers" :key=headers.indexOf(header)>
        <th>{{ header }}</th>
      </template>
    </tr>

    <template v-for="(item, index) in data" :key="index">
      <tr class="row">
        <slot :item="item" :index="index" />
      </tr>
    </template>

  </table>
</template>

<style scoped>
table {
  & tr {
    height: 2.5rem;
    text-align: left;
    border-bottom: 2px solid rgba(185, 185, 185, 0.5);
  }

  & th {
    color: teal;
    font-size: 20px;
    padding: 1rem;
    background: rgba(119, 136, 153, 0.2);
    font-weight: bold;
  }
}

.row {
  &:hover {
    background: greenyellow;
    transition-duration: .3s;
  }

  &:not(:hover) {
    background: white;
    transition-duration: .3s;

    &:nth-child(odd) {
      background: rgba(255, 255, 255, 0.7);
    }
  }
}
</style>