<template>
  <div class="counter-display">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>其他组件中的计数器</span>
        </div>
      </template>
      
      <p>当前计数：{{ counterStore.count }}</p>
      <p>双倍计数：{{ counterStore.doubleCount }}</p>
      
      <div class="button-group">
        <el-button type="success" @click="handleIncrement">
          在这里也能增加
        </el-button>
        <el-button type="warning" @click="handleDecrement">
          在这里也能减少
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'
import { ElMessage } from 'element-plus'

const counterStore = useCounterStore()

const handleIncrement = () => {
  counterStore.increment()
  ElMessage.success('在子组件中增加计数')
}

const handleDecrement = () => {
  if (counterStore.count > 0) {
    counterStore.decrement()
    ElMessage.success('在子组件中减少计数')
  } else {
    ElMessage.warning('计数已经为0，不能再减少了')
  }
}
</script>

<style scoped>
.counter-display {
  margin-top: 20px;
}

.button-group {
  margin-top: 10px;
}

.button-group .el-button {
  margin-right: 10px;
}
</style> 