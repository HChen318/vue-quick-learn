<template>
  <div class="scoped-slot">
    <div class="slot-wrapper">
      <!-- 作用域插槽：向父组件传递数据 -->
      <slot :user="user" :items="items">
        <!-- 默认内容 -->
        <p>默认用户信息展示：{{ user.name }}</p>
      </slot>
    </div>

    <!-- 展示不同的数据 -->
    <div class="slot-wrapper" v-for="item in items" :key="item.id">
      <slot :item="item" name="item">
        <!-- 默认内容 -->
        <p>{{ item.text }}</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScopedSlot',
  data() {
    return {
      user: {
        name: '张三',
        age: 25
      },
      items: [
        { id: 1, text: '项目1' },
        { id: 2, text: '项目2' },
        { id: 3, text: '项目3' }
      ]
    }
  }
}
</script>

<style scoped>
.scoped-slot {
  padding: 15px;
  background-color: #f5f7fa;
  border-radius: 4px;
}

.slot-wrapper {
  border: 1px dashed #409eff;
  padding: 10px;
  margin: 5px;
}
</style> 