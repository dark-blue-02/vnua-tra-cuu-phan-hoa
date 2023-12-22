<script setup lang="ts">
import HomePage from './view/page/HomePage.vue';

</script>

<template>
  <div class="screen">
    <HomePage />
  </div>
</template>

<style scoped>
.screen {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(135deg, rgb(194, 255, 200), rgb(255, 251, 200));
}
</style>