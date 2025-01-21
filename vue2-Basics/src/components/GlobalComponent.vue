<template>
  <div class="global-component">
    <h4>全局注册的组件</h4>
    <p>这个组件在 main.js 中全局注册</p>
  </div>
</template>

<script>
export default {
  name: 'GlobalComponent'
}
</script>

<style scoped>
.global-component {
  padding: 10px;
  background-color: #f0fff0;
  border-radius: 4px;
  margin: 10px 0;
}
</style> 