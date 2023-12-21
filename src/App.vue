<script setup lang="ts">
import MainViewModel from './viewmodel/MainViewModel';

const viewModel = new MainViewModel();

</script>

<template>
  <div class="screen">
    <div class="container">
      <a>Header</a>
      <button @click="viewModel.increment">Count is: {{ viewModel.count }}</button>
      <button @click="viewModel.getWeaponList">Weapon list: <br>{{ viewModel.weaponList }}</button>
    </div>
  </div>
</template>

<style scoped>
a {
  font-size: 4rem;
}

button {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.screen {
  display: flex;
  height: 100%;
  width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;

  &>* {
    margin: 8px 0;
  }
}
</style>