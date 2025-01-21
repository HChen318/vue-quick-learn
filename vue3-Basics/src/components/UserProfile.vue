<template>
  <div class="user-profile">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>用户信息</span>
        </div>
      </template>
      <el-form label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="user.name" disabled />
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="user.age" :min="0" :max="150" @change="handleAgeChange" />
        </el-form-item>
        <el-form-item label="邮箱" v-if="showDetails">
          <el-input v-model="user.email" disabled />
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  },
  showDetails: {
    type: Boolean,
    default: false
  },

})

const emit = defineEmits(['update:age', 'change'])

const handleAgeChange = (value) => {
  emit('update:age', value)
}
</script>

<style scoped>
.user-profile {
  max-width: 500px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style> 