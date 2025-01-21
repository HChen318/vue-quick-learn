<template>
  <div id="app">
    <h1>Vue3 基础教程</h1>
    <!-- 导航菜单 -->
    <el-menu mode="horizontal" router :default-active="activeMenu">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/vue-instance">Vue实例与组合式API</el-menu-item>
      <el-menu-item index="/directives">数据绑定与指令</el-menu-item>
      <el-menu-item index="/computed">计算属性与监听器</el-menu-item>
      <el-menu-item index="/component-basics">组件基础</el-menu-item>
      <el-menu-item index="/slots">插槽使用</el-menu-item>
      <el-menu-item index="/hooks">Hooks(组合式函数)</el-menu-item>
      <el-menu-item index="/element-plus">Element Plus基础</el-menu-item>
      <el-menu-item index="/pinia-demo">Pinia状态管理</el-menu-item>
    </el-menu>

    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeMenu = ref('/')

// 监听路由变化
watch(
  () => route.path,
  (newPath) => {
    activeMenu.value = newPath
  },
  { immediate: true }
)
</script>

<style>
#app {
  padding: 20px;
}
</style>
