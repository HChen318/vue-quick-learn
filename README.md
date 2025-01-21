# Vue 基础教程示例项目集

这个仓库包含了 Vue2 和 Vue3 的基础教程示例项目，帮助开发者理解 Vue 的演进和最佳实践。

## 项目结构

- [Vue2 基础教程](vue2-Basics/README.md)
- [Vue3 基础教程](vue3-Basics/README.md)

## Vue2 vs Vue3 主要区别

### 1. 响应式系统
- Vue2：Object.defineProperty
- Vue3：Proxy（更好的性能和数组支持）

### 2. API 风格
- Vue2：Options API
- Vue3：Composition API（更好的代码组织和复用）

### 3. 性能提升
- Vue3 更小更快
- 更好的 Tree-shaking 支持
- 优化的虚拟 DOM

### 4. TypeScript 支持
- Vue3 提供更好的 TypeScript 支持
- 内置的 TypeScript 装饰器支持

### 5. 新特性
- Teleport
- Fragments
- Suspense
- 组合式 API
- 更好的响应式 API

## 快速开始

### Vue2 项目
```bash
cd vue2-Basics
npm install
npm run serve
```

### Vue3 项目
```bash
cd vue3-Basics
npm install
npm run dev
```

## 系统要求

### Vue2 项目
- Node.js >= 12
- npm >= 6

### Vue3 项目
- Node.js >= 18
- npm >= 9

## 学习路径建议

1. 如果你是新手：
   - 直接学习 Vue3（vue3-Basics）
   - 使用组合式 API
   - 专注于现代开发实践

2. 如果你要维护旧项目：
   - 先学习 Vue2（vue2-Basics）
   - 了解 Options API
   - 然后学习迁移策略

3. 如果你是有经验的开发者：
   - 对比学习两个版本的区别
   - 理解设计理念的演进
   - 掌握迁移策略

## 文档资源

### Vue2
- [Vue2 官方文档](https://v2.vuejs.org/)
- [Vue CLI 文档](https://cli.vuejs.org/)
- [Vuex 文档](https://vuex.vuejs.org/)
- [Vue Router v3 文档](https://v3.router.vuejs.org/)

### Vue3
- [Vue3 官方文档](https://v3.vuejs.org/)
- [Vite 文档](https://vitejs.dev/)
- [Pinia 文档](https://pinia.vuejs.org/)
- [Vue Router v4 文档](https://router.vuejs.org/)
- [Element Plus 文档](https://element-plus.org/)

## 项目特点对比

### Vue2 项目特点
- 使用 Vue CLI 构建
- Options API 风格
- Vuex 状态管理
- Element UI 组件库
- Vue Router v3

### Vue3 项目特点
- 使用 Vite 构建
- Composition API 风格
- Pinia 状态管理
- Element Plus 组件库
- Vue Router v4

## 常见问题

### Vue2 常见问题
1. 数组变更检测的限制
2. 对象属性添加/删除的限制
3. 生命周期钩子中的 this 指向

### Vue3 常见问题
1. 组合式 API 的学习曲线
2. setup 语法糖的使用
3. 响应式数据的解包

## 贡献指南

1. Fork 本仓库
2. 选择对应版本的项目目录
3. 创建功能分支
4. 提交改动
5. 发起 Pull Request

## 许可证

本项目采用 MIT 许可证，详见 [LICENSE](LICENSE) 文件。

## 更新日志

### 2024-01
- 初始版本发布
- Vue2 和 Vue3 基础示例
- 基础文档完成
