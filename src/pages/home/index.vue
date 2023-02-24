<template>
  <h3>home</h3>
  <p>{{ value }}</p>
  <el-button @click="handleAdd">+</el-button>
</template>

<script setup>
import { ref } from "vue";
let value = ref(0);

const handleAdd = () => {
  value.value++;
};
</script>

<style>
</style>