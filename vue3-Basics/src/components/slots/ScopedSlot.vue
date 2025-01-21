<template>
  <div class="scoped-slot">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>作用域插槽示例</span>
        </div>
      </template>

      <!-- 传递数据给默认插槽 -->
      <slot 
        :user="user"
        :items="items"
      >
        <!-- 默认内容 -->
        <div>
          <p>用户名：{{ user.name }}</p>
          <p>项目数：{{ items.length }}</p>
        </div>
      </slot>

      <!-- 遍历项目并为每个项目提供作用域插槽 -->
      <div class="items-container">
        <div v-for="item in items" :key="item.id">
          <slot name="item" :item="item">
            <!-- 默认项目展示 -->
            <p>{{ item.text }}</p>
          </slot>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

// 示例数据
const user = reactive({
  name: '张三',
  age: 25
})

const items = reactive([
  { id: 1, text: '项目 1' },
  { id: 2, text: '项目 2' },
  { id: 3, text: '项目 3' }
])
</script>

<style scoped>
.scoped-slot {
  margin: 10px 0;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.items-container {
  margin-top: 20px;
}
</style> 