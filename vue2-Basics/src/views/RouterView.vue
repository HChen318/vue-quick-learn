<template>
  <div class="router-demo">
    <h2>路由基础</h2>

    <!-- 1. 路由是什么 -->
    <div class="demo-section">
      <h3>1. 什么是路由？</h3>
      <p>路由就是通过不同的URL访问不同的页面内容</p>
      <p>当前路由路径: <strong>{{ $route.path }}</strong></p>
    </div>

    <!-- 2. 路由的使用方式 -->
    <div class="demo-section">
      <h3>2. 路由的使用方式</h3>
      
      <!-- 声明式导航 -->
      <div class="nav-section">
        <h4>方式一：声明式导航</h4>
        <nav class="nav-links">
          <router-link to="/router-page1" class="nav-link">页面1</router-link>
          <router-link to="/router-page2" class="nav-link">页面2</router-link>
        </nav>
      </div>

      <!-- 编程式导航 -->
      <div class="nav-section">
        <h4>方式二：编程式导航</h4>
        <div class="nav-buttons">
          <button @click="$router.push('/router-page1')">跳转到页面1</button>
          <button @click="$router.push('/router-page2')">跳转到页面2</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouterView'
}
</script>

<style scoped>
.router-demo {
  padding: 20px;
}

.demo-section {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
}

.nav-section {
  margin: 15px 0;
}

.nav-link {
  margin: 0 10px;
  color: #409eff;
  text-decoration: none;
}

button {
  margin: 0 10px;
  padding: 5px 10px;
}
</style> 