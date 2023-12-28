<script setup lang="ts">
import { ResponseState } from '@/common/ResponseResult'
import StringUtils from '@/common/utils/StringUtils'
import DataRowCell from '@/view/components/table/DataRowCell.vue'
import DataTable from '@/view/components/table/DataTable.vue'
import { inject } from 'vue'
import DiKeys from '@/common/DiKeys'
import MainViewModel from '@/viewmodel/MainViewModel'

const viewModel = inject(DiKeys.mainViewModel, new MainViewModel())
const headers = ['No', 'Name', 'Type', 'Attributes']
</script>

<template>
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
</template>

<style scoped>

</style>