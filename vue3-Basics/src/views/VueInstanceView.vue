<template>
  <div class="vue-instance">
    <h2>Vue3 实例与组合式 API</h2>

    <!-- 1. ref 的使用 -->
    <div class="demo-section">
      <h3>1. ref 响应式引用</h3>
      <div class="demo-item">
        <p>计数器: {{ count }}</p>
        <el-button-group>
          <!-- 4. 方法与事件处理 -->
          <el-button type="primary" @click="increment">增加</el-button>
          <el-button type="primary" @click="decrement">减少</el-button>
        </el-button-group>
      </div>
    </div>

    <!-- 2. reactive 的使用 -->
    <div class="demo-section">
      <h3>2. reactive 响应式对象</h3>
      <div class="demo-item">
        <el-form :model="user" label-width="100px">
          <el-form-item label="姓名">
            <el-input v-model="user.name" />
          </el-form-item>
          <el-form-item label="年龄">
            <el-input-number v-model="user.age" :min="0" :max="150" />
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="user.email" />
          </el-form-item>
        </el-form>
        <div class="user-info">
          <p>用户信息：{{ user }}</p>
        </div>
      </div>
    </div>

    <!-- 3. 生命周期钩子 -->
    <div class="demo-section">
      <h3>3. 生命周期钩子</h3>
      <div class="demo-item">
        <p>组件已创建时间：{{ createdTime }}</p>
        <p>组件已运行：{{ runningTime }} 秒</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
// let count = 0
// count变化了, 视图不会更新
// Proxy

// 1. ref 示例
const count = ref(0) // 使用ref的话更新了数据实时响应模板, 基本类型,引用类型
const obj = ref({ name: 'ch' })

const increment = () => {
  count.value++
  obj.value.name = '1111'
  // count++
  // console.log(count, '==count')
}

const decrement = () => {
  if (count.value > 0) {
    count.value--
  }
}


// 2. reactive 示例.,声明引用类型 {} []
const user = reactive({
  name: '张三',
  age: 25,
  email: 'zhangsan@example.com',
})

// 3. 生命周期钩子示例
const createdTime = ref(new Date().toLocaleTimeString())
const runningTime = ref(0)
let timer

onMounted(() => {
  timer = setInterval(() => {
    runningTime.value++
  }, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style scoped>
.vue-instance {
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

.user-info {
  margin-top: 20px;
  padding: 10px;
  background-color: #ecf5ff;
  border-radius: 4px;
}

.message-list {
  margin-top: 20px;
  max-height: 300px;
  overflow-y: auto;
}

.el-button-group {
  margin: 10px 0;
}

.el-button-group .el-button {
  margin: 0;
}
</style>
