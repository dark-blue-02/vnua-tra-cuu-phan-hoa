<script setup lang="ts">
import { type Company } from '@/model/model/Company'

withDefaults(
  defineProps<{ data: Array<Company> }>(),
  { data: () => new Array<Company>() }
)
const headers = ['Company', 'Contact', 'Country']
</script>

<template>
  <table>
    <tr>
      <template v-for="header in headers" :key=headers.indexOf(header)>
        <th>{{ header }}</th>
      </template>
    </tr>

    <template v-for="(item, index) in data.concat(data)" :key=index>
      <tr class="content hover:bg-green-300">
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.country }}</td>
      </tr>
    </template>
  </table>
</template>

<style scoped>
tr {
  height: 2.5rem;
  text-align: left;
  border-bottom: 2px solid rgba(185, 185, 185, 0.5);

  &.content:not(:hover) {
    background: white;

    &:nth-child(odd) {
      background: rgba(255, 255, 255, 0.5);
    }
  }
}

th {
  color: teal;
  font-size: 20px;
  padding: 1rem;
  background: rgba(119, 136, 153, 0.2);
  font-weight: bold;
}

td {
  font-size: 12px;
  padding: 1rem;
  color: darkgreen;
}
</style>