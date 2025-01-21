<template>
  <div class="named-slot">
    <!-- 页头具名插槽 -->
    <header class="slot-section">
      <slot name="header">
        <h4>默认页头</h4>
      </slot>
    </header>

    <!-- 主体内容默认插槽 -->
    <main class="slot-section">
      <slot>
        <p>默认主体内容</p>
      </slot>
    </main>

    <!-- 页脚具名插槽 -->
    <footer class="slot-section">
      <slot name="footer">
        <p>默认页脚</p>
      </slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'NamedSlot'
}
</script>

<style scoped>
.named-slot {
  padding: 15px;
  background-color: #f5f7fa;
  border-radius: 4px;
}

.slot-section {
  border: 1px dashed #409eff;
  padding: 10px;
  margin: 5px;
}

header {
  background-color: #e6f1fc;
}

footer {
  background-color: #f0f9eb;
}
</style> 