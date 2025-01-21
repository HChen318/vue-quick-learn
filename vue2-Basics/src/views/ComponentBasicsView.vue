<template>
  <div class="component-basics">
    <h2>组件基础</h2>

    <!-- 1. 组件注册演示 -->
    <div class="demo-section">
      <h3>1. 组件注册</h3>
      <LocalComponent></LocalComponent>
      <GlobalComponent></GlobalComponent>
    </div>

    <!-- 2. 父传子：Props传递数据 -->
    <div class="demo-section">
      <h3>2. 父传子（Props传递）</h3>
      <PropsDemo
        title="Props 示例"
        :count="propsCount"
        :user="user"
        :items="['项目1', '项目2', '项目3']"
        :data="data"
      ></PropsDemo>
      <button @click="propsCount++">增加数字</button>
    </div>

    <!-- 3. 子传父：自定义事件 -->
    <div class="demo-section">
      <h3>3. 子传父（自定义事件）</h3>
      <EventDemo
        @customClick="handleCustomClick"
        @valueChange="handleValueChange"
      ></EventDemo>
      <p>从子组件接收到的值: {{ receivedValue }}</p>
    </div>
  </div>
</template>

<script>
// 导入局部组件
import LocalComponent from "../components/LocalComponent.vue";
import PropsDemo from "../components/PropsDemo.vue";
import EventDemo from "../components/EventDemo.vue";

export default {
  name: "ComponentBasicsView",

  // 注册局部组件
  components: {
    LocalComponent,
    PropsDemo,
    EventDemo,
  },

  data() {
    return {
      propsCount: 0,
      user: {
        name: "张三",
        age: 25,
      },
      receivedValue: "",
      data: {},
    };
  },

  methods: {
    // 接收子组件的事件,处理自定义事件
    handleCustomClick(data) {
      console.log("父组件收到自定义事件:", data);
      alert(`收到子组件事件，数据：${data}`);
    },

    // 接收子组件的事件,处理自定义事件
    handleValueChange(value, value1, bb) {
      console.log(2222);
      console.log("bb:", bb);
      console.log("value1:", value1);
      this.receivedValue = value;
    },
  },
};
</script>

<style scoped>
.component-basics {
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
