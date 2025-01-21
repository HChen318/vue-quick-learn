<template>
  <div class="vuex-demo">
    <h2>Vuex 使用示例</h2>

    <!-- 计数器示例：展示最基础的 Vuex 状态管理 -->
    <div class="counter-section">
      <h3>计数器示例</h3>
      <!-- 使用 mapActions 映射的方法直接调用 -->
      <div class="counter-controls">
        <el-button type="primary" @click="decrement">-</el-button>
        <!-- 使用 mapState 映射的计算属性访问状态 -->
        <span class="count">{{ count }}</span>
        <el-button type="primary" @click="increment">+</el-button>
      </div>
    </div>

    <!-- Todo List 示例：展示较复杂的状态管理 -->
    <div class="todo-section">
      <h3>待办事项示例</h3>
      <!-- 输入框和添加按钮 -->
      <div class="todo-input">
        <el-input
          v-model="newTodo"
          placeholder="请输入待办事项"
          @keyup.enter.native="addNewTodo"
        >
          <el-button slot="append" @click="addNewTodo">添加</el-button>
        </el-input>
      </div>

      <!-- 使用 mapGetters 映射的 todos 展示列表 -->
      <div class="todo-list">
        <el-card v-for="(todo, index) in todos" :key="index" class="todo-item">
          {{ todo }}
          <el-button
            type="danger"
            size="mini"
            @click="removeTodo(index)"
            style="float: right"
          >
            删除
          </el-button>
        </el-card>
      </div>

      <!-- 使用 mapGetters 映射的计算属性显示总数 -->
      <div class="todo-stats">总计待办事项: {{ todoCount }}</div>
    </div>
  </div>
</template>

<script>
// 从 vuex 中导入辅助函数
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "VuexDemo",

  // 组件内部状态
  data() {
    return {
      newTodo: "", // 新待办事项的输入值
    };
  },

  computed: {
    // 使用对象展开运算符混入 mapState
    // mapState：从 store 中的 state 映射状态到计算属性
    ...mapState({
      count: (state) => state.count, // 映射 count 状态
    }),
    // mapGetters：从 store 中的 getters 映射计算属性
    ...mapGetters([
      "todos", // 映射 todos getter
      "todoCount", // 映射 todoCount getter
    ]),
  },

  methods: {
    // mapActions：从 store 中的 actions 映射方法
    ...mapActions([
      "increment", // 映射 increment action
      "decrement", // 映射 decrement action
      "removeTodo", // 映射 removeTodo action
    ]),

    // 自定义方法：添加新待办事项
    addNewTodo() {
      if (this.newTodo.trim()) {
        // 直接调用 store.dispatch 提交 action
        this.$store.dispatch("addTodo", this.newTodo.trim());
        this.newTodo = ""; // 清空输入框
      }
    },
  },
};
</script>

<style scoped>
/* 页面整体样式 */
.vuex-demo {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

/* 计数器和待办事项部分的间距 */
.counter-section,
.todo-section {
  margin-bottom: 30px;
}

/* 计数器控制按钮布局 */
.counter-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

/* 计数显示样式 */
.count {
  font-size: 24px;
  font-weight: bold;
}

/* 待办事项输入框样式 */
.todo-input {
  margin-bottom: 20px;
}

/* 待办事项卡片样式 */
.todo-item {
  margin-bottom: 10px;
  padding: 10px;
}

/* 待办事项统计信息样式 */
.todo-stats {
  margin-top: 20px;
  text-align: right;
  color: #666;
}
</style>
