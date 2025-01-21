<template>
  <div id="app">
    <div>主页面</div>
    <!-- 导航菜单 -->
    <el-menu 
      mode="horizontal" 
      router 
      :default-active="activeMenu"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/vue-instance">Vue实例</el-menu-item>
      <el-menu-item index="/directives">数据绑定与指令</el-menu-item>
      <el-menu-item index="/computed">计算属性示例</el-menu-item>
      <el-menu-item index="/component-basics">组件基础</el-menu-item>
      <el-menu-item index="/slots">插槽使用</el-menu-item>
      <el-menu-item index="/router">路由基础</el-menu-item>
      <el-menu-item index="/element-ui">Element UI基础</el-menu-item>
      <el-menu-item index="/vuex-demo">Vuex状态管理</el-menu-item>
    </el-menu>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeMenu: '/'
    }
  },
  watch: {
    // 监听路由变化
    $route: {
      handler(route) {
        this.activeMenu = route.path
      },
      immediate: true  // 立即执行一次
    }
  }
}
</script>

<style>
#app {
  padding: 20px;
}
</style>
