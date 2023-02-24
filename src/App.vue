<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <!-- <el-button>我是 ElButton</el-button>
    <HelloWorld msg="Vite + Vue" /> -->

    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>

</style>
