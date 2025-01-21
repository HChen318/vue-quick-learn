<template>
  <div class="hooks-demo">
    <h2>Hooks (组合式函数) 示例</h2>

    <div class="hooks-explanation">
      <h4>Hooks 的优势：</h4>
      <ol>
        <li>逻辑复用：可以在多个组件中复用相同的逻辑</li>
        <li>关注点分离：每个 hook 专注于特定的功能</li>
        <li>组合灵活：可以组合多个 hooks 来构建复杂功能</li>
        <li>代码清晰：避免了 mixin 的命名冲突问题</li>
      </ol>
    </div>

    <!-- 1. 鼠标位置追踪 -->
    <div class="demo-section">
      <h3>1. 鼠标位置追踪</h3>
      <div class="demo-item">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>useMousePosition</span>
            </div>
          </template>

          <div class="mouse-tracker">
            <p>当前鼠标位置：</p>
            <p class="position">X: {{ x }}, Y: {{ y }}</p>
          </div>
        </el-card>
      </div>
    </div>

    <!-- 2. 计数器 Hook -->
    <div class="demo-section">
      <h3>2. 计数器 Hook</h3>
      <div class="demo-item">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>useCounter</span>
            </div>
          </template>

          <div class="counter-demo">
            <p>当前计数：{{ count }}</p>
            <p>双倍值：{{ doubleCount }}</p>
            <div class="button-group">
              <el-button type="primary" @click="increment">增加</el-button>
              <el-button type="warning" @click="decrement">减少</el-button>
              <el-button @click="reset">重置</el-button>
            </div>
          </div>
        </el-card>

        <div class="hooks-explanation">
          <h4>useCounter Hook 说明：</h4>
          <ul>
            <li>包含状态管理：count</li>
            <li>包含计算属性：doubleCount</li>
            <li>包含多个操作方法：increment、decrement、reset</li>
            <li>支持自定义初始值</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMousePosition } from '../hooks/useMousePosition'
import { useCounter } from '../hooks/useCounter'


// 使用鼠标位置追踪 hook
const { x, y } = useMousePosition()

// 使用计数器 hook（设置初始值为 0）
const { count, doubleCount, increment, decrement, reset } = useCounter(0)

</script>

<style scoped>
.hooks-demo {
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

.demo-item {
  margin: 15px 0;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.mouse-tracker {
  text-align: center;
}

.position {
  font-size: 1.2em;
  color: #409eff;
  margin: 10px 0;
}

.counter-demo {
  text-align: center;
}

.button-group {
  margin: 15px 0;
}

.button-group .el-button {
  margin: 0 5px;
}

.hooks-explanation {
  margin-top: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.hooks-explanation ol,
.hooks-explanation ul {
  padding-left: 20px;
  line-height: 1.6;
}

.hooks-explanation li {
  margin: 8px 0;
  color: #666;
}
</style>
