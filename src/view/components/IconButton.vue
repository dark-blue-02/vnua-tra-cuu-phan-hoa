<script setup lang="ts">

defineProps({ iconSrc: String, title: String, btnStyle: String });
defineEmits(['onClick']);

</script>

<template>
  <div>
    <button :class=btnStyle @click="$emit('onClick')">
      <img :src=iconSrc>
      <p>{{ title }}</p>
    </button>

  </div>
</template>

<style scoped>
button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 16px;
  border: none;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

img {
  flex: 1;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  filter: invert(1);
}

p {
  flex: auto;
  font-size: 20px;
  color: white;
}
</style>