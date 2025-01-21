<template>
  <div class="default-slot">
    <div class="slot-wrapper">
      <!-- 默认插槽 -->
      <slot>
        <!-- 默认内容，当没有提供插槽内容时显示 -->
        <p>这是默认内容</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultSlot'
}
</script>

<style scoped>
.default-slot {
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