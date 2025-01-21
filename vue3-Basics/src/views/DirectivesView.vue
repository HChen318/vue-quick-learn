<template>
  <div class="directives-demo">
    <h2>Vue3 指令演示</h2>

    <!-- 1. v-bind 属性绑定 -->
    <div class="demo-section">
      <h3>1. v-bind 属性绑定</h3>
      <div class="demo-item">
        <!-- v-bind:src 可以缩写为 :src -->
        <img :src="imageUrl" :alt="imageAlt" :style="{ width: imageWidth + 'px' }" />
        <p :class="{ highlight: isHighlight }">动态class绑定</p>
        <p :style="{ color: textColor, fontSize: fontSize + 'px' }">动态style绑定</p>
        <el-button @click="changeStyle">修改样式</el-button>
      </div>
    </div>

    <!-- 2. v-model 双向绑定 -->
    <div class="demo-section">
      <h3>2. v-model 双向绑定</h3>
      <div class="demo-item">
        <el-input v-model="inputText" placeholder="请输入文本"></el-input>
        <p>输入的内容：{{ inputText }}</p>

        <el-input type="textarea" v-model="textareaContent" placeholder="多行文本"></el-input>
        <p>文本内容：{{ textareaContent }}</p>

        <el-checkbox v-model="checked">是否选中: {{ checked }}</el-checkbox>
      </div>
    </div>

    <!-- 3. v-if/v-show 条件渲染 -->
    <div class="demo-section">
      <h3>3. v-if/v-show 条件渲染</h3>
      <div class="demo-item">
        <el-button @click="toggleShow">切换显示</el-button>
        <p v-if="showContent">v-if 内容（条件为真时才渲染）</p>
        <p v-show="showContent">v-show 内容（只是切换display属性）</p>

        <div v-if="type === 'A'">类型A</div>
        <div v-else-if="type === 'B'">类型B</div>
        <div v-else>其他类型</div>

        <el-button @click="changeType">切换类型</el-button>
      </div>
    </div>

    <!-- 4. v-for 列表渲染 -->
    <div class="demo-section">
      <h3>4. v-for 列表渲染</h3>
      <div class="demo-item">
        <el-table :data="items">
          <el-table-column prop="id" label="ID" width="180"></el-table-column>
          <el-table-column prop="text" label="内容"></el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <el-button @click="removeItem(scope.$index)" type="danger" size="small"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-button @click="addItem" type="primary" style="margin-top: 10px">添加项目</el-button>
      </div>
    </div>

    <!-- 5. v-on 事件处理 -->
    <div class="demo-section">
      <h3>5. v-on 事件处理</h3>
      <div class="demo-item">
        <!-- v-on:click 可以缩写为 @click -->
        <el-button @click="counter++">普通点击 ({{ counter }})</el-button>
        <el-button @click="handleClick">方法调用</el-button>
        <el-button @click="handleParamClick('hello', $event)">带参数的方法</el-button>

        <!-- 事件修饰符 -->
        <div class="event-demo" @click="handleOuterClick">
          外层div
          <el-button @click.stop="handleInnerClick">阻止冒泡</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

// v-bind 相关数据
const imageUrl = ref('https://element-plus.org/images/element-plus-logo.svg')
const imageAlt = ref('示例图片')
const imageWidth = ref(100)
const isHighlight = ref(false)
const textColor = ref('black')
const fontSize = ref(14)

// v-model 相关数据
const inputText = ref('')
const textareaContent = ref('')
const checked = ref(false)

// v-if/v-show 相关数据
const showContent = ref(true)
const type = ref('A')

// v-for 相关数据
const items = ref([
  { id: 1, text: '项目1' },
  { id: 2, text: '项目2' },
  { id: 3, text: '项目3' },
])
const nextId = ref(4)

// v-on 相关数据
const counter = ref(0)

// 方法定义
const changeStyle = () => {
  isHighlight.value = !isHighlight.value
  textColor.value = textColor.value === 'black' ? 'red' : 'black'
  fontSize.value = fontSize.value === 14 ? 18 : 14
}

const toggleShow = () => {
  showContent.value = !showContent.value
}

const changeType = () => {
  const types = ['A', 'B', 'C']
  const currentIndex = types.indexOf(type.value)
  type.value = types[(currentIndex + 1) % types.length]
}

const addItem = () => {
  items.value.push({
    id: nextId.value++,
    text: '新项目' + nextId.value,
  })
}

const removeItem = (index) => {
  items.value.splice(index, 1)
}

const handleClick = () => {
  ElMessage.success('按钮被点击了！')
}

const handleParamClick = (msg, event) => {
  ElMessage.info(`消息: ${msg}, 事件类型: ${event.type}`)
}

// function handleParamClick(params) {
  
// }

const handleOuterClick = () => {
  ElMessage.info('外层div被点击')
}

const handleInnerClick = () => {
  ElMessage.info('内层按钮被点击（不会冒泡）')
}
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

.demo-item {
  margin: 15px 0;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.highlight {
  background-color: #ffd04b;
  padding: 5px;
}

.event-demo {
  margin: 10px 0;
  padding: 10px;
  border: 1px dashed #999;
  background-color: #f9f9f9;
}

.el-input {
  width: 300px;
  margin-bottom: 10px;
}

.el-button {
  margin: 5px;
}

.el-checkbox {
  margin: 10px 0;
}
</style>
