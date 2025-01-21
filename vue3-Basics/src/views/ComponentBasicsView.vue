<template>
  <div class="component-basics">
    <h2>组件基础</h2>

    <!-- 1. Props 传递 -->
    <div class="demo-section">
      <h3>1. Props 传递</h3>
      <!-- 通过 props 传递数据，通过自定义事件接收子组件的更新 -->
      <UserProfile :user="user" :show-details="true" @update:age="handleAgeUpdate"> </UserProfile>

    </div>

    <!-- 2. 事件处理 -->
    <div class="demo-section">
      <h3>2. 事件处理</h3>
      <!-- 监听子组件触发的自定义事件 -->
      <EventHandling @custom-click="handleCustomClick" @value-change="handleValueChange" />
      <p>从子组件接收的值: {{ receivedValue }}</p>
    </div>

    <!-- 3. 组件通信 -->
    <div class="demo-section">
      <h3>3. 组件通信</h3>
      <!-- 
        这是一个完整的组件通信示例：
        - MessageSender 组件用于发送消息，通过 emit 向父组件传递消息
        - MessageReceiver 组件用于显示消息，通过 props 接收消息列表
        - 父组件作为中间人，协调两个组件之间的通信
      -->
      <el-row :gutter="20">
        <el-col :span="12">
          <MessageSender @send-message="handleMessage" />
        </el-col>
        <el-col :span="12">
          <MessageReceiver :messages="messages" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import UserProfile from '../components/UserProfile.vue'
import EventHandling from '../components/EventHandling.vue'
import MessageSender from '../components/MessageSender.vue'
import MessageReceiver from '../components/MessageReceiver.vue'


// Props 示例数据
const user = reactive({
  name: '张三',
  age: 25,
  email: 'zhangsan@example.com',
})

// 处理子组件的年龄更新事件
const handleAgeUpdate = (newAge) => {
  user.age = newAge
  ElMessage.success(`年龄更新为: ${newAge}`)
}

// 事件处理示例
const receivedValue = ref('')

// 处理子组件的自定义点击事件
const handleCustomClick = (data) => {
  ElMessage.info(`收到自定义事件，数据：${data}`)
}

// 处理子组件的值变化事件
const handleValueChange = (value) => {
  receivedValue.value = value
}

// 组件通信示例
const messages = ref([]) // 存储所有消息的数组

// 处理消息发送事件
// 当 MessageSender 组件发送消息时，将消息添加到数组中
// 这些消息会自动通过 props 传递给 MessageReceiver 组件
const handleMessage = (message) => {
  messages.value.push({
    id: Date.now(),
    content: message,
    time: new Date().toLocaleTimeString(),
  })
}
</script>

<style scoped>
.component-basics {
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

.el-input {
  width: 200px;
  margin-bottom: 10px;
}
</style>
