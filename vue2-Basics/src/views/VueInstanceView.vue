<template>
  <div class="vue-instance-demo">
    <h2>Vue基础演示</h2>

    <!-- 1. Vue实例的创建和配置 -->
    <div class="demo-section">
      <h3>1. Vue实例的创建和配置</h3>
      <p>实例配置选项:</p>
      <ul>
        <li>name: {{ $options.name }}</li>
        <li>data中的message: {{ message }}</li>
        <li>当前组件的refs: {{ Object.keys($refs) }}</li>
        <li>是否有父组件: {{ $parent ? "是" : "否" }}</li>
        <li>是否有flag组件: {{ flag ? "是" : "否" }}</li>
      </ul>
    </div>

    <!-- 2. 模板语法演示 -->
    <div class="demo-section">
      <h3>2. 文本插值 {{}}</h3>
      <!-- 使用 {{}} 进行文本插值，将data中的数据显示在页面上 -->
      <p>1. 基础文本显示: {{ message }}</p>

      <!-- {{}} 中可以写简单的表达式 -->
      <p>2. 表达式计算: {{ 1 + 1 }}</p>
      <p>3. 字符串处理: {{ message.toUpperCase() }}</p>
      <p>4. 三元运算: {{ message.length > 5 ? "长消息" : "短消息" }}</p>
    </div>

    <!-- 3. 生命周期钩子演示 -->
    <div class="demo-section">
      <h3>3. 生命周期钩子</h3>
      <p>当前时间: {{ currentTime }}</p>
      <p>请打开控制台查看生命周期钩子的执行顺序</p>
      <el-button @click="updateMessage">更新数据</el-button>
      <el-button @click="$destroy()">销毁组件</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueInstanceView",

  // Vue 实例的配置选项
  data() {
    return {
      message: "Hello Vue!",
      currentTime: new Date().toLocaleString(),
      flag: true,
    };
  },

  // 生命周期钩子
  beforeCreate() {
    console.log("1. beforeCreate: 实例创建前，数据观测和事件配置之前");
    console.log("   this.$data:", this.$data); // undefined
  },

  created() {
    console.log("2. created: 实例创建后，已完成数据观测和事件配置");
    console.log("   this.$data:", this.$data); // 可以访问数据

    // ajax
  },

  beforeMount() {
    console.log("3. beforeMount: 挂载前，模板编译完成");
  },

  mounted() {
    console.log("4. mounted: 挂载后，DOM已经更新");
    // 设置定时器更新时间
    // this.timer = setInterval(() => {
    //   this.currentTime = new Date().toLocaleString()
    // }, 1000)
  },

  beforeUpdate() {
    console.log("beforeUpdate: 数据更新前，DOM更新前");
  },

  updated() {
    console.log("updated: 数据更新后，DOM已更新");
  },

  beforeDestroy() {
    console.log("beforeDestroy: 实例销毁前");
    // 清理定时器
    clearInterval(this.timer);
  },

  destroyed() {
    console.log("destroyed: 实例已销毁");
  },

  methods: {
    updateMessage() {
      // 当数据更新时，使用 {{}} 绑定的内容会自动更新
      this.message = "消息已更新: " + new Date().toLocaleString();
    },
  },
};
</script>

<style scoped>
.vue-instance-demo {
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

.el-button {
  margin-right: 10px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin: 8px 0;
  color: #666;
}
</style>
