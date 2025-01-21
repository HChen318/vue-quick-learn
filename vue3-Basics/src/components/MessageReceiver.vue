<template>
  <div class="message-receiver">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>消息列表</span>
          <span class="message-count">共 {{ messages.length }} 条</span>
        </div>
      </template>

      <el-timeline>
        <el-timeline-item
          v-for="msg in messages"
          :key="msg.id"
          :timestamp="msg.time"
          type="primary"
        >
          {{ msg.content }}
        </el-timeline-item>
      </el-timeline>
    </el-card>
  </div>
</template>

<script setup>
defineProps({
  messages: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.message-count {
  font-size: 0.9em;
  color: #909399;
}
</style>
