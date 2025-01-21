<template>
  <div class="props-demo">
    <h4>{{ title }}</h4>
    <div class="props-content">
      <!-- 显示传入的数字 -->
      <p>数字属性: {{ count }}</p>

      <!-- 显示传入的对象 -->
      <p>用户信息: {{ user.name }} ({{ user.age }}岁)</p>

      <!-- 显示传入的数组 -->
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropsDemo",

  // Props 定义
  props: {
    // 基础类型检查
    title: String,

    // 数字类型，带默认值
    count: {
      type: Number,
      default: 0,
    },

    // 对象类型，必填
    user: {
      type: Object,
      required: true,
    },

    // 数组类型，带验证函数
    items: {
      type: Array,
      validator: function (value) {
        return value.length > 0;
      },
    },

    data: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.props-demo {
  padding: 15px;
  background-color: #f5f7fa;
  border-radius: 4px;
  margin: 10px 0;
}

.props-content {
  margin-left: 20px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin: 5px 0;
}
</style>
