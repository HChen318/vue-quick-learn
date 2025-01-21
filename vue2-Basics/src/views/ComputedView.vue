<template>
  <div class="computed-demo">
    <h2>计算属性与侦听器</h2>

    <!-- 1. 计算属性 computed -->
    <div class="demo-section">
      <h3>1. 计算属性 (computed)</h3>
      <div class="input-group">
        <p>
          姓：<input v-model="firstName" placeholder="请输入姓" /> 名：<input
            v-model="lastName"
            placeholder="请输入名"
          />
        </p>
        <!-- 使用计算属性 -->
        <p>完整姓名：{{ fullName }}</p>
        <!-- 使用方法对比 -->
        <p>方法生成姓名：{{ getFullName() }}</p>
      </div>

      <div class="input-group">
        <p>数字列表：{{ numbers.join(", ") }}</p>
        <button @click="addNumber">添加数字</button>
        <!-- 使用计算属性自动计算 -->
        <p>偶数列表：{{ evenNumbers }}</p>
        <p>数字总和：{{ sum }}</p>
      </div>
    </div>

    <!-- 2. 侦听器 watch -->
    <div class="demo-section">
      <h3>2. 侦听器 (watch)</h3>
      <div class="input-group">
        <p>
          搜索关键词：
          <input v-model="searchQuery" placeholder="输入关键词自动搜索" />
        </p>
        <p>搜索状态：{{ searchStatus }}</p>
      </div>

      <div class="input-group">
        <p>
          请输入Email：
          <input v-model="email" placeholder="输入邮箱地址" />
        </p>
        <p>验证状态：{{ emailStatus }}</p>
      </div>

      <!-- 深度监听对象示例 -->
      <div class="input-group">
        <p>用户信息：</p>
        <p>
          姓名：<input v-model="user.name" /> 年龄：<input
            v-model.number="user.age"
            type="number"
          />
        </p>
        <p>变更记录：{{ userChangeLog }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComputedView",

  data() {
    return {
      // computed 相关数据
      firstName: "",
      lastName: "",
      numbers: [1, 2, 3, 4, 5],

      // watch 相关数据
      searchQuery: "",
      searchStatus: "等待输入...",
      email: "",
      emailStatus: "",
      user: {
        name: "张三",
        age: 20,
      },
      userChangeLog: [],
    };
  },

  // 计算属性 ,计算属性有缓存，只有依赖变化时才会重新计算,用于依赖数据的计算并返回结果,提高响应速度
  computed: {
    // 基础计算属性
    fullName() {
      console.log("计算属性 fullName 被调用");
      return this.firstName + " " + this.lastName;
    },

    // 过滤计算
    evenNumbers() {
      return this.numbers.filter((number) => number % 2 === 0);
    },

    // 聚合计算
    sum() {
      return this.numbers.reduce((sum, number) => sum + number, 0);
    },
  },

  // 方法
  methods: {
    // 用于对比计算属性
    getFullName() {
      console.log(" getFullName 方法被调用");
      return this.firstName + " " + this.lastName;
    },

    addNumber() {
      this.numbers.push(this.numbers.length + 1);
    },

    // 模拟异步搜索
    async search(query) {
      this.searchStatus = "搜索中...";
      // 模拟API调用
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.searchStatus = `搜索完成：${query}`;
    },
  },

  // 侦听器 (侦听器可以执行异步操作和复杂逻辑),用于响应数据变化时执行一些操作,可以访问新值和旧值
  watch: {
    // 基础监听
    searchQuery(newValue, oldValue) {
      console.log(`搜索词从 ${oldValue} 变为 ${newValue}`);
      if (newValue.trim()) {
        this.search(newValue);
      } else {
        this.searchStatus = "等待输入...";
      }
    },

    // 表单验证示例
    email(newValue) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailStatus = emailRegex.test(newValue) ? "✓ 格式正确" : "× 格式错误";
    },

    // 深度监听对象
    user: {
      handler(newValue) {
        this.userChangeLog.unshift(
          `${new Date().toLocaleTimeString()}: 用户信息更新 - 姓名: ${
            newValue.name
          }, 年龄: ${newValue.age}`
        );
      },
      deep: true, // 深度监听
    },
  },
};
</script>

<style scoped>
.computed-demo {
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

.input-group {
  margin: 15px 0;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
}

input {
  margin: 0 10px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  margin: 5px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
  cursor: pointer;
}

button:hover {
  background-color: #e0e0e0;
}
</style>
