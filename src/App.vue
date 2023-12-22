<script setup lang="ts">
import { ResponseState } from './common/ResponseResult';
import MaterialButton from './view/MaterialButton.vue';
import MainViewModel from './viewmodel/MainViewModel';
import flowerImg from "./assets/svg/flower.svg";

const viewModel = new MainViewModel();

</script>

<template>
  <div class="screen">
    <div class="container">
      <a>Header</a>
      <MaterialButton btn-style="bg-blue-600" :icon-src=flowerImg :title="`Count: ${viewModel.count}`"
        @on-click=viewModel.increment />

      <button @click="viewModel.getWeaponList">Give me everything!</button>

      <p class="text-blue-900 border border-teal-600 rounded p-2"
        v-if="viewModel.weaponList.state != ResponseState.LOADING">
        Weapon list: <br>{{ viewModel.weaponList }}
      </p>
    </div>
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

.screen {
  display: flex;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(135deg, rgb(194, 255, 200), rgb(255, 251, 200));
}

.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  &>* {
    margin: 8px 0;
  }
}
</style>