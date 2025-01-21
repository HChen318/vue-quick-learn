<template>
  <div class="message-sender">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>消息发送</span>
        </div>
      </template>
      
      <div class="sender-content">
        <el-input
          v-model="message"
          type="textarea"
          :rows="3"
          placeholder="请输入消息"
        />
        <el-button 
          type="primary" 
          @click="sendMessage"
          :disabled="!message.trim()"
        >
          发送消息
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['send-message'])
const message = ref('')

const sendMessage = () => {
  if (message.value.trim()) {
    emit('send-message', message.value)
    message.value = ''
  }
}
</script>

<style scoped>
.sender-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style> 