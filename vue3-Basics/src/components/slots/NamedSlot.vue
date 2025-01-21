<template>
  <div class="named-slot">
    <el-card>
      <!-- 页头插槽 -->
      <template #header>
        <slot name="header">
          <h4>默认页头</h4>
        </slot>
      </template>

      <!-- 默认插槽 -->
      <slot>
        <p>默认内容区域</p>
      </slot>

      <!-- 页脚插槽 -->
      <template #footer>
        <div class="footer">
          <slot name="footer">
            <p>默认页脚</p>
          </slot>
        </div>
      </template>
    </el-card>
  </div>
</template>

<style scoped>
.named-slot {
  margin: 10px 0;
}

.footer {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
</style> 