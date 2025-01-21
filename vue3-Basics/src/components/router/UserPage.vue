<template>
  <div class="user-page">
    <h4>用户页面</h4>
    <p>用户ID: {{ route.params.id }}</p>
    <p>来源: {{ route.query.from }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script> 