<template>
  <div class="directives-demo">
    <h2>Vue指令演示</h2>

    <!-- 1. v-bind 属性绑定 -->
    <div class="demo-section">
      <h3>1. v-bind 属性绑定</h3>
      <div>
        <!-- v-bind:src 可以缩写为 :src -->
        <img
          :src="imageUrl"
          :alt="imageAlt"
          :style="{ width: imageWidth + 'px' }"
        />
        <p :class="{ highlight: isHighlight }">动态class绑定</p>
        <p :style="{ color: textColor, fontSize: fontSize + 'px' }">
          动态style绑定
        </p>
      </div>
      <button @click="changeStyle">修改样式</button>
    </div>

    <!-- 2. v-model 双向绑定 -->
    <div class="demo-section">
      <h3>2. v-model 双向绑定</h3>
      <div>
        <p>文本输入：<input v-model="inputText" placeholder="请输入" /></p>
        <p>输入的内容：{{ inputText }}</p>

        <p>多行文本：<textarea v-model="textareaContent"></textarea></p>
        <p>文本内容：{{ textareaContent }}</p>

        <p>
          复选框：
          <input type="checkbox" v-model="checked" />
          <span>是否选中: {{ checked }}</span>
        </p>
      </div>
    </div>

    <!-- 3. v-if/v-show 条件渲染 -->
    <div class="demo-section">
      <h3>3. v-if/v-show 条件渲染</h3>
      <div>
        <button @click="toggleShow">切换显示</button>
        <p v-if="showContent">v-if 内容（条件为真时才渲染）</p>
        <p v-show="showContent">v-show 内容（只是切换display属性）</p>

        <div v-if="type === 'A'">类型A</div>
        <div v-else-if="type === 'B'">类型B</div>
        <div v-else>其他类型</div>

        <button @click="changeType">切换类型</button>
      </div>
    </div>

    <!-- 4. v-for 列表渲染 -->
    <div class="demo-section">
      <h3>4. v-for 列表渲染</h3>
      <ul>
        <li v-for="(item, index) in items" :key="item.id">
          {{ index + 1 }}. {{ item.text }}
          <button @click="removeItem(index)">删除</button>
        </li>
      </ul>
      <button @click="addItem">添加项目</button>
    </div>

    <!-- 5. v-on 事件处理 -->
    <div class="demo-section">
      <h3>5. v-on 事件处理</h3>
      <div>
        <!-- v-on:click 可以缩写为 @click -->
        <button @click="counter++">普通点击 ({{ counter }})</button>
        <button @click="handleClick">方法调用</button>
        <button @click="handleParamClick('hello', $event)">带参数的方法</button>

        <!-- 事件修饰符 -->
        <div class="event-demo" @click="handleOuterClick">
          外层div
          <button @click.stop="handleInnerClick">阻止冒泡</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DirectivesView",

  data() {
    return {
      // v-bind 相关数据
      imageUrl:
        "https://img0.baidu.com/it/u=2244434439,490443088&fm=253&fmt=auto?w=921&h=500",
      imageAlt: "示例图片",
      imageWidth: 100,
      isHighlight: false,
      textColor: "black",
      fontSize: 14,

      // v-model 相关数据
      inputText: "",
      textareaContent: "",
      checked: false,

      // v-if/v-show 相关数据
      showContent: true,
      type: "A",

      // v-for 相关数据
      items: [
        { id: 1, text: "项目1" },
        { id: 2, text: "项目2" },
        { id: 3, text: "项目3" },
      ],
      nextId: 4,

      // v-on 相关数据
      counter: 0,
    };
  },

  methods: {
    // v-bind 相关方法
    changeStyle() {
      this.isHighlight = !this.isHighlight;
      this.textColor = this.textColor === "black" ? "red" : "black";
      this.fontSize = this.fontSize === 14 ? 18 : 14;
    },

    // v-if/v-show 相关方法
    toggleShow() {
      this.showContent = !this.showContent;
    },
    changeType() {
      const types = ["A", "B", "C"];
      const currentIndex = types.indexOf(this.type);
      this.type = types[(currentIndex + 1) % types.length];
    },

    // v-for 相关方法
    addItem() {
      this.items.push({
        id: this.nextId++,
        text: "新项目" + this.nextId,
      });
    },
    // 删除
    removeItem(index) {
      this.items.splice(index, 1);
    },

    // v-on 相关方法
    handleClick() {
      alert("按钮被点击了！");
    },
    handleParamClick(msg, event) {
      alert(`消息: ${msg}, 事件类型: ${event.type}`);
    },
    handleOuterClick() {
      alert("外层div被点击");
    },
    handleInnerClick() {
      alert("内层按钮被点击（不会冒泡）");
    },
  },
};
</script>

<style scoped>
.directives-demo {
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

.highlight {
  background-color: #ffd04b;
  padding: 5px;
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

textarea {
  width: 300px;
  height: 100px;
  margin: 10px 0;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #eee;
  border-radius: 4px;
}

.event-demo {
  margin: 10px 0;
  padding: 10px;
  border: 1px dashed #999;
  background-color: #f9f9f9;
}
</style>
