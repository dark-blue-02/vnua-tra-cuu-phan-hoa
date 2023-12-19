<script setup lang="ts">
import MainViewModel from './viewmodel/MainViewModel';

const viewModel = new MainViewModel();

</script>

<template>
  <div class="screen">
    <div class="container">
      <a>Header</a>
      <button @click="viewModel.increment">Count is: {{ viewModel.count }}</button>
      <button @click="viewModel.getWeaponList">Count is: {{ viewModel.weaponList }}</button>
    </div>
  </div>
</template>

<style scoped>
a {
  font-size: 4rem;
  user-select: none;
}

.screen {
  display: flex;
  height: 100vh;
  width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}
</style>