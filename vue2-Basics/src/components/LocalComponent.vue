<template>
  <div class="local-component">
    <h4>局部注册的组件</h4>
    <p>这个组件通过 components 选项注册</p>
  </div>
</template>

<script>
export default {
  name: 'LocalComponent'
}
</script>

<style scoped>
.local-component {
  padding: 10px;
  background-color: #f0f9ff;
  border-radius: 4px;
  margin: 10px 0;
}
</style> 