<template>
  <div class="event-demo">
    <h4>子组件向父组件传值示例</h4>
    <div class="event-content">
      <!-- 子组件通过$emit向父组件发送事件和数据 -->
      <button @click="handleClick">发送数据到父组件</button>

      <!-- 子组件将输入框的值发送给父组件 -->
      <div class="input-group">
        <input v-model="inputValue" placeholder="输入内容" />
        <button @click="emitValue">发送输入值到父组件</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDemo",

  data() {
    return {
      inputValue: "",
    };
  },

  methods: {
    handleClick() {
      // 子组件通过$emit向父组件发送事件和数据
      this.$emit("customClick", "这是来自子组件的数据");
    },

    emitValue() {
      console.log(11111);
      // 子组件将输入框的值发送给父组件
      this.$emit("valueChange", this.inputValue, 555, 3333);
    },
  },
};
</script>

<style scoped>
.event-demo {
  padding: 15px;
  background-color: #f5f7fa;
  border-radius: 4px;
  margin: 10px 0;
}

.event-content {
  margin: 10px 0;
}

.input-group {
  margin-top: 10px;
}

input {
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  margin: 5px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #f0f0f0;
}
</style>
