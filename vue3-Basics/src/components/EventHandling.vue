<template>
  <div class="event-handling">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>事件处理示例</span>
        </div>
      </template>
      
      <div class="event-content">
        <el-button @click="handleClick">发送自定义事件</el-button>
        
        <div class="input-group">
          <el-input 
            v-model="inputValue" 
            placeholder="输入内容"
            @keyup.enter="emitValue"
          />
          <el-button @click="emitValue">发送输入值</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['custom-click', 'value-change'])
const inputValue = ref('')

const handleClick = () => {
  emit('custom-click', '这是来自子组件的数据')
}

const emitValue = () => {
  emit('value-change', inputValue.value)
  inputValue.value = ''
}
</script>

<style scoped>
.event-handling {
  max-width: 500px;
}

.event-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input-group {
  display: flex;
  gap: 10px;
}
</style> 