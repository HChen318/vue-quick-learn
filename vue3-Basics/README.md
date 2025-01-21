# Vue3 基础教程示例项目

这是一个 Vue3 基础教程的示例项目，使用 Vue3 + Vite + Element Plus + Pinia 构建，旨在帮助开发者快速掌握 Vue3 的核心概念和最佳实践。

## 项目特点

- 📚 包含完整的 Vue3 基础知识示例
- 🛠️ 使用 Vue3 组合式 API
- 🎨 集成 Element Plus UI 框架
- 📦 使用 Pinia 进行状态管理
- 🚦 Vue Router 路由管理
- 🎯 代码组织清晰，注释详细

## 功能模块

1. **Vue3 实例与组合式 API**
   - ref 和 reactive 的使用
   - 生命周期钩子
   - 方法与事件处理

2. **数据绑定与指令**
   - v-bind 属性绑定
   - v-model 双向绑定
   - v-if/v-show 条件渲染
   - v-for 列表渲染
   - v-on 事件处理

3. **计算属性与监听器**
   - computed 计算属性
   - watch/watchEffect 侦听器

4. **组件基础**
   - Props 传递
   - 事件处理
   - 组件通信

5. **插槽使用**
   - 默认插槽
   - 具名插槽
   - 作用域插槽

6. **Hooks (组合式函数)**
   - useMousePosition
   - useCounter
   - 自定义 Hooks 示例

7. **Element Plus 基础**
   - 常用组件示例
   - 表单处理
   - 布局组件

8. **Pinia 状态管理**
   - Store 的定义和使用
   - 状态管理
   - 多组件状态共享

## 开发环境

- Node.js >= 18
- Vue 3
- Vite
- Element Plus
- Pinia
- Vue Router

## 推荐的 IDE 设置

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (并禁用 Vetur)
- 开启 [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471)

## 项目设置

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 代码检查
npm run lint
```

## 项目结构

```
src/
├── assets/          # 静态资源
├── components/      # 公共组件
│   ├── router/     # 路由相关组件
│   └── slots/      # 插槽示例组件
├── hooks/          # 自定义 Hooks
├── router/         # 路由配置
├── stores/         # Pinia 状态管理
├── views/          # 页面视图组件
└── App.vue         # 根组件
```

## 学习资源

- [Vue3 官方文档](https://v3.vuejs.org/)
- [Element Plus 文档](https://element-plus.org/)
- [Pinia 文档](https://pinia.vuejs.org/)
- [Vue Router 文档](https://router.vuejs.org/)

## 贡献

欢迎提交 Issue 或 Pull Request 来完善这个教程项目。

## 许可

[MIT](LICENSE)
