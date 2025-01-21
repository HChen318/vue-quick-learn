<template>
  <div class="slot-demo">
    <h2>插槽使用示例</h2>

    <!-- 1. 默认插槽 -->
    <div class="demo-section">
      <h3>1. 默认插槽</h3>
      <DefaultSlot>
        <p>这是插入到默认插槽的内容</p>
      </DefaultSlot>
      <!-- 不提供内容时使用默认内容 -->
      <DefaultSlot />
    </div>

    <!-- 2. 具名插槽 -->
    <div class="demo-section">
      <h3>2. 具名插槽</h3>
      <NamedSlot>
        <template #header>
          <h4>自定义页头</h4>
        </template>

        <template #default>
          <p>这是主要内容区域</p>
        </template>

        <template #footer>
          <p>自定义页脚</p>
        </template>
      </NamedSlot>
    </div>

    <!-- 3. 作用域插槽 -->
    <div class="demo-section">
      <h3>3. 作用域插槽</h3>
      <ScopedSlot>
        <template #default="{ user, items }">
          <div class="user-info">
            <h4>用户信息</h4>
            <p>姓名：{{ user.name }}</p>
            <p>年龄：{{ user.age }}</p>
          </div>
          <div class="items-list">
            <h4>项目列表</h4>
            <ul>
              <li v-for="item in items" :key="item.id">
                {{ item.text }}
              </li>
            </ul>
          </div>
        </template>

        <template #item="{ item }">
          <el-card class="item-card">
            {{ item.text }}
          </el-card>
        </template>
      </ScopedSlot>
    </div>

    <!-- 4. 动态插槽 -->
    <div class="demo-section">
      <h3>4. 动态插槽</h3>
      <el-radio-group v-model="currentSlot">
        <el-radio-button label="header">Header</el-radio-button>
        <el-radio-button label="content">Content</el-radio-button>
        <el-radio-button label="footer">Footer</el-radio-button>
      </el-radio-group>

      <NamedSlot>
        <template #[currentSlot]>
          <div class="dynamic-content">
            动态插入到 {{ currentSlot }} 插槽的内容
          </div>
        </template>
      </NamedSlot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DefaultSlot from '../components/slots/DefaultSlot.vue'
import NamedSlot from '../components/slots/NamedSlot.vue'
import ScopedSlot from '../components/slots/ScopedSlot.vue'

const currentSlot = ref('header')
</script>

<style scoped>
.slot-demo {
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

.user-info, .items-list {
  margin: 10px 0;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.item-card {
  margin: 10px 0;
}

.dynamic-content {
  padding: 10px;
  background-color: #ecf5ff;
  border-radius: 4px;
  margin: 10px 0;
}

.el-radio-group {
  margin-bottom: 15px;
}
</style> 