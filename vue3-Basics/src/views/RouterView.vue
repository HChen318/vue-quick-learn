<template>
  <div class="router-demo">
    <h2>Vue Router 使用示例</h2>

    <!-- 1. 基础路由 -->
    <div class="demo-section">
      <h3>1. 基础路由导航</h3>
      <div class="demo-item">
        <el-button-group>
          <!-- 声明式导航 -->
          <router-link to="/router/page1" custom v-slot="{ navigate }">
            <el-button @click="navigate">页面1</el-button>
          </router-link>
          <router-link to="/router/page2" custom v-slot="{ navigate }">
            <el-button @click="navigate">页面2</el-button>
          </router-link>
          <!-- 编程式导航 -->
          <el-button @click="goToPage3">页面3</el-button>
        </el-button-group>

        <!-- 路由出口 -->
        <div class="route-content">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <!-- 2. 路由参数 -->
    <div class="demo-section">
      <h3>2. 路由参数传递</h3>
      <div class="demo-item">
        <el-input v-model="userId" placeholder="输入用户ID" style="width: 200px">
          <template #append>
            <el-button @click="goToUser">查看用户</el-button>
          </template>
        </el-input>

        <div class="current-route">
          <p>当前路由信息：</p>
          <ul>
            <li>路径: {{ route.path }}</li>
            <li>参数: {{ JSON.stringify(route.params) }}</li>
            <li>查询参数: {{ JSON.stringify(route.query) }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 3. 路由守卫 -->
    <div class="demo-section">
      <h3>3. 路由守卫</h3>
      <div class="demo-item">
        <el-button @click="goToProtected">访问受保护页面</el-button>
        <p class="tip">提示：需要先登录才能访问受保护页面</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const route = useRoute()
const userId = ref('')

// 编程式导航
const goToPage3 = () => {
  router.push('/router/page3')
}

// 带参数的导航
const goToUser = () => {
  if (userId.value) {
    router.push({
      name: 'user',
      params: { id: userId.value },
      query: { from: 'router-demo' }
    })
  } else {
    ElMessage.warning('请输入用户ID')
  }
}

// 访问受保护页面
const goToProtected = () => {
  router.push('/router/protected')
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

h3 {
  margin-top: 0;
  color: #409eff;
}

.demo-item {
  margin: 15px 0;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.route-content {
  margin-top: 20px;
  padding: 20px;
  border: 1px dashed #ddd;
  border-radius: 4px;
}

.current-route {
  margin-top: 20px;
}

.current-route ul {
  list-style: none;
  padding-left: 20px;
}

.tip {
  margin-top: 10px;
  color: #666;
  font-size: 0.9em;
}
</style> 