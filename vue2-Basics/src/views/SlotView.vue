<template>
  <div class="slot-demo">
    <h2>插槽演示 作用于组件实现自定义的模板内容</h2>

    <!-- 1. 默认插槽 -->
    <div class="demo-section">
      <h3>1. 默认插槽</h3>
      <DefaultSlot>
        <!-- 默认插槽内容 -->
        <p>这是插入到默认插槽的内容</p>
        <button>插入的按钮</button>
        <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="" />
      </DefaultSlot>
    </div>

    <!-- 2. 具名插槽 -->
    <div class="demo-section">
      <h3>2. 具名插槽</h3>
      <NamedSlot>
        <!-- header插槽 -->
        <template #header>
          <h4>这是标题</h4>
        </template>

        <!-- 默认插槽内容 -->
        <p>这是主要内容</p>

        <!-- footer插槽 -->
        <template #footer>
          <button>底部按钮</button>
        </template>
      </NamedSlot>
    </div>

    <!-- 3. 作用域插槽 -->
    <div class="demo-section">
      <h3>3. 作用域插槽</h3>
      <ScopedSlot>
        <!-- 使用作用域插槽接收子组件的数据 -->
        <template #default="slotProps">
          <p>用户信息：{{ slotProps.user.name }} - {{ slotProps.user.age }}岁</p>
        </template>
      </ScopedSlot>
    </div>
  </div>
</template>

<script>
import DefaultSlot from '../components/slots/DefaultSlot.vue'
import NamedSlot from '../components/slots/NamedSlot.vue'
import ScopedSlot from '../components/slots/ScopedSlot.vue'

export default {
  name: 'SlotView',
  components: {
    DefaultSlot,
    NamedSlot,
    ScopedSlot
  }
}
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
</style> 