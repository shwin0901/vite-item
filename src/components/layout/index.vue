<template>
  <el-container>
    <el-header class="layout-header">
    </el-header>
    <el-container class="layout-container">
      <el-aside class="layout-aside">
        <el-menu class="layout-aside-menu">
          <el-menu-item index="1">Home</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
</script>

<style scoped>
.layout-header {
  background-color: #1c1664;
}

.layout-container {
  height: calc(100vh - 60px);
}

.layout-aside {
  background-color: #1c1664;
  width: 200px;
}

.layout-aside-menu {
  background-color: #1c1664;
  color: #fff;
}
.layout-aside-menu > li {
  color: #fff
}
</style>