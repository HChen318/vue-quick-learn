<template>
  <div class="computed-demo">
    <h2>计算属性与侦听器</h2>

    <!-- 1. 计算属性 computed -->
    <div class="demo-section">
      <h3>1. 计算属性 (computed)</h3>
      <div class="demo-item">
        <div class="input-group">
          <el-input v-model="firstName" placeholder="请输入姓" style="width: 120px" />
          <el-input v-model="lastName" placeholder="请输入名" style="width: 120px" />
        </div>
        <!-- 使用计算属性 -->
        <p>完整姓名（计算属性）：{{ fullName }}</p>
        <!-- 使用方法对比 -->
        <p>完整姓名（方法）：{{ getFullName() }}</p>
      </div>

      <div class="demo-item">
        <p>数字列表：{{ numbers.join(", ") }}</p>
        <el-button @click="addNumber">添加数字</el-button>
        <!-- 使用计算属性自动计算 -->
        <p>偶数列表：{{ evenNumbers }}</p>
        <p>数字总和：{{ sum }}</p>
      </div>
    </div>

    <!-- 2. 侦听器 watch -->
    <div class="demo-section">
      <h3>2. 侦听器 (watch)</h3>
      <div class="demo-item">
        <el-input v-model="searchQuery" placeholder="输入关键词自动搜索" clearable />
        <p>搜索状态：{{ searchStatus }}</p>
      </div>

      <div class="demo-item">
        <el-input v-model="email" placeholder="输入邮箱地址" clearable />
        <p>验证状态：{{ emailStatus }}</p>
      </div>

      <!-- 深度监听对象示例 -->
      <div class="demo-item">
        <h4>用户信息：</h4>
        <el-form :model="user" label-width="100px">
          <el-form-item label="姓名">
            <el-input v-model="user.name" />
          </el-form-item>
          <el-form-item label="年龄">
            <el-input-number v-model="user.age" :min="0" :max="150" />
          </el-form-item>
        </el-form>
        <div class="change-log">
          <h4>变更记录：</h4>
          <el-timeline>
            <el-timeline-item v-for="(log, index) in userChangeLog" :key="index" :timestamp="log" placement="top">
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>

    <!-- 3. watchEffect -->
    <div class="demo-section">
      <h3>3. watchEffect</h3>
      <div class="demo-item">
        <el-input v-model="watchEffectDemo" placeholder="输入内容" />
        <p>Effect 执行次数: {{ effectCount }}</p>
        <p>最后执行时间: {{ lastEffectTime }}</p>
      </div>
    </div>
  </div>
</template>

<!-- 组合式API的入口点 -->
<script setup>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

// 1. 计算属性相关
const firstName = ref('')
const lastName = ref('')
const numbers = ref([1, 2, 3, 4, 5])

// 基础计算属性
const fullName = computed(() => {
  console.log('计算属性 fullName 被调用')
  return firstName.value + ' ' + lastName.value
})

// 用于对比的方法
const getFullName = () => {
  console.log('方法 getFullName 被调用')
  return firstName.value + ' ' + lastName.value
}

// 过滤计算
const evenNumbers = computed(() => {
  return numbers.value.filter(number => number % 2 === 0)
})

// 聚合计算
const sum = computed(() => {
  return numbers.value.reduce((sum, number) => sum + number, 0)
})

const addNumber = () => {
  numbers.value.push(numbers.value.length + 1)
}

// 2. 侦听器相关
const searchQuery = ref('')
const searchStatus = ref('等待输入...')
const email = ref('')
const emailStatus = ref('')
const user = reactive({
  name: '张三',
  age: 20
})
const userChangeLog = ref([])

// 基础监听
watch(searchQuery, async (newValue, oldValue) => {
  console.log(`搜索词从 ${oldValue} 变为 ${newValue}`)
  if (newValue.trim()) {
    searchStatus.value = '搜索中...'
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1000))
    searchStatus.value = `搜索完成：${newValue}`
  } else {
    searchStatus.value = '等待输入...'
  }
})

// 表单验证示例
watch(email, (newValue) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  emailStatus.value = emailRegex.test(newValue) ? '✓ 格式正确' : '× 格式错误'
})

// 深度监听对象
watch(
  user,
  () => {
    userChangeLog.value.unshift(
      `${new Date().toLocaleTimeString()}: 用户信息更新 - 姓名: ${user.name}, 年龄: ${user.age}`
    )
  },
  { deep: true }
)

// 3. watchEffect 示例
const watchEffectDemo = ref('')
const effectCount = ref(0)
const lastEffectTime = ref('')

watchEffect(() => {
  // 会自动追踪 watchEffectDemo 的变化
  console.log('watchEffect 执行:', watchEffectDemo.value)
  effectCount.value++
  lastEffectTime.value = new Date().toLocaleTimeString()
})
</script>

<style scoped>
.computed-demo {
  padding: 20px;
}

.demo-section {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
}

.demo-item {
  margin: 15px 0;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
}

h3 {
  margin-top: 0;
  color: #409eff;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.el-input {
  margin-bottom: 10px;
}

.change-log {
  margin-top: 20px;
  max-height: 200px;
  overflow-y: auto;
}

.el-timeline {
  margin-top: 10px;
}
</style> 

