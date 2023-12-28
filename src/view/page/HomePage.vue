<script setup lang="ts">
import MainViewModel from '@/viewmodel/MainViewModel'
import flowerImg from '../../assets/svg/flower.svg'
import { ResponseState } from '@/common/ResponseResult'
import IconButton from '../components/button/IconButton.vue'
import DataTable from '@/view/components/table/DataTable.vue'
import { provide } from 'vue'
import DiKeys from '@/common/DiKeys'
import StringUtils from '@/common/utils/StringUtils'
import DataRowCell from '@/view/components/table/DataRowCell.vue'

const viewModel = new MainViewModel()
provide(DiKeys.mainViewModel, viewModel)

const headers = ['No', 'Name', 'Type', 'Attributes']
</script>

<template>
  <div class="container">
    <a>Header</a>
    <IconButton :icon-src=flowerImg
                :title="`Tra cứu: ${viewModel.count}`"
                btn-style="bg-blue-600"
                @on-click=viewModel.increment />

    <button @click="viewModel.getWeaponList">Give me everything!</button>

    <DataTable v-if="viewModel.weaponList.state == ResponseState.SUCCESS"
               :headers="headers"
               :data="viewModel.weaponList.data">
      <template v-slot:default="{item, index}">
        <DataRowCell class="font-semibold">{{ index }}</DataRowCell>
        <DataRowCell>{{ item.name }}</DataRowCell>
        <DataRowCell class="font-semibold">{{ StringUtils.capitalize(item.type) }}</DataRowCell>
        <DataRowCell class="italic">{{ item.attributes ? item.attributes : 'NULL' }}</DataRowCell>
      </template>
    </DataTable>
    <p class="text-teal-600" v-else-if="viewModel.weaponList.state == ResponseState.ERROR">Something went wrong :(</p>
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

td {
  font-size: 12px;
  padding: 1rem;
  color: darkgreen;
}
</style>