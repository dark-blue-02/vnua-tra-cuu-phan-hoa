<script setup lang="ts">
import MainViewModel from '@/viewmodel/MainViewModel'
import flowerImg from '../../assets/svg/flower.svg'
import { ResponseState } from '@/common/ResponseResult'
import IconButton from '../components/button/IconButton.vue'
import DataTable from '@/view/components/table/DataTable.vue'
import { provide } from 'vue'
import DiKeys from '@/common/DiKeys'

const viewModel = new MainViewModel()
provide(DiKeys.mainViewModel, viewModel)
</script>

<template>
  <div class="container">
    <a>Header</a>
    <IconButton :icon-src=flowerImg
                :title="`Tra cứu: ${viewModel.count}`"
                btn-style="bg-blue-600"
                @on-click=viewModel.increment />

    <button @click="viewModel.getWeaponList">Give me everything!</button>

    <DataTable v-if="viewModel.weaponList.state != ResponseState.LOADING" :data=viewModel.weaponList.data />
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