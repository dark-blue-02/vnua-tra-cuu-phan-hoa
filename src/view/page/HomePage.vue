<script setup lang="ts">
import MainViewModel from '@/viewmodel/MainViewModel'
import flowerImg from '../../assets/svg/flower.svg'
import { ResponseState } from '@/common/ResponseResult'
import IconButton from '../components/IconButton.vue'
import DataTable from '@/view/components/DataTable.vue'
import type { Company } from '@/model/model/Company'

const viewModel = new MainViewModel()
const fakeData: Array<Company> = [
  { id: 1, name: 'Abc', contact: 'Maria Anders', country: 'Germany' },
  { id: 2, name: 'Central', contact: 'Francisco Chang', country: 'Mexico' }
]
</script>

<template>
  <div class="container">
    <a>Header</a>
    <IconButton :icon-src=flowerImg
                :title="`Tra cứu: ${viewModel.count}`"
                btn-style="bg-blue-600"
                @on-click=viewModel.increment />

    <button @click="viewModel.getWeaponList">Give me everything!</button>

    <p class="text-blue-900 border border-teal-600 rounded p-2"
       v-if="viewModel.weaponList.state != ResponseState.LOADING">
      Weapon list: <br>{{ viewModel.weaponList }}
    </p>
    <DataTable :data=fakeData />
  </div>
</template>

<style scoped>
a {
  font-size: 4rem;
  color: turquoise;
}

button {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  & > * {
    margin: 8px 0;
  }
}
</style>