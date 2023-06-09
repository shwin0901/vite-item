<template>
  <h3>home</h3>
  <p>{{ value }}</p>
  <el-button @click="handleAdd">+</el-button>
  <el-table :data="[]">
    <el-table-column prop="data" label="data" />
    <el-table-column prop="name" label="name" />
    <el-table-column prop="address" label="address" />
  </el-table>
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