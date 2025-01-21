<template>
  <div class="default-slot">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>默认插槽示例</span>
        </div>
      </template>
      <!-- 默认插槽使用 slot 标签或直接使用 -->
      <slot>
        <!-- 这是默认内容，当没有提供插槽内容时显示 -->
        <p>这是默认插槽的默认内容</p>
      </slot>
    </el-card>
  </div>
</template>

<style scoped>
.default-slot {
  margin: 10px 0;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style> 