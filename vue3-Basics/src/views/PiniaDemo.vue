<template>
  <div class="pinia-demo">
    <h2>Pinia 状态管理示例</h2>

    <div class="demo-section">
      <h3>计数器示例</h3>
      <div class="demo-item">
        <!-- 直接使用 store 中的状态 -->
        <p>当前计数：{{ counterStore.count }}</p>
        <p>双倍计数：{{ counterStore.doubleCount }}</p>

        <div class="button-group">
          <!-- 调用本地方法 -->
          <el-button type="primary" @click="handleIncrement">增加</el-button>
          <el-button type="primary" @click="handleDecrement">减少</el-button>
        </div>

        <!-- 展示多组件共享状态 -->
        <CounterDisplay />
      </div>
    </div>

    <div class="demo-section">
      <h3>Store 使用说明</h3>
      <el-card>
        <template #header>
          <div class="card-header">
            <span>Pinia 基础概念</span>
          </div>
        </template>
        <ol>
          <li>Store 是一个用来存储全局状态的地方</li>
          <li>可以在任何组件中访问 Store 中的状态</li>
          <li>Store 中的状态是响应式的</li>
          <li>多个组件可以共享同一个 Store</li>
        </ol>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'
import CounterDisplay from '../components/CounterDisplay.vue'
import { ElMessage } from 'element-plus'

// 创建 store 实例
const counterStore = useCounterStore()

// 处理增加操作
const handleIncrement = () => {
  counterStore.increment()
  ElMessage.success(`计数增加到：${counterStore.count}`)
}

// 处理减少操作
const handleDecrement = () => {
  if (counterStore.count > 0) {
    counterStore.decrement()
    ElMessage.success(`计数减少到：${counterStore.count}`)
  } else {
    ElMessage.warning('计数已经为0，不能再减少了')
  }
}
</script>

<style scoped>
.pinia-demo {
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

.button-group {
  margin: 10px 0;
}

.button-group .el-button {
  margin-right: 10px;
}

ol {
  padding-left: 20px;
  line-height: 1.8;
}
</style> 