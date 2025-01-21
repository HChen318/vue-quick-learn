import Vue from 'vue'
import Vuex from 'vuex'

// 安装 Vuex
Vue.use(Vuex)

export default new Vuex.Store({
  // state: 存储状态（数据）
  state: {
    count: 0,         // 计数器的值
    todos: [],         // 待办事项列表
    userInfo: {
      name: 'xiangzong'
    }
  },

  // mutations: 用于修改状态，必须是同步函数
  mutations: {
    // 增加计数
    INCREMENT(state) {
      state.count++
    },
    // 减少计数
    DECREMENT(state) {
      state.count--
    },
    // 添加待办事项
    ADD_TODO(state, todo) {
      state.todos.push(todo)
    },
    // 删除待办事项
    REMOVE_TODO(state, index) {
      state.todos.splice(index, 1)
    }
  },

  // actions: 用于处理异步操作，可以包含任意异步操作
  // context 对象包含 commit、state 等方法和属性
  actions: {
    increment({ commit }) {
      commit('INCREMENT')  // 提交 mutation
    },
    decrement({ commit }) {
      commit('DECREMENT')
    },
    addTodo({ commit }, todo) {
      // 这里可以进行异步操作，例如发送 API 请求
      commit('ADD_TODO', todo)
    },
    removeTodo({ commit }, index) {
      commit('REMOVE_TODO', index)
    }
  },

  // getters: 类似于计算属性，用于对 state 中的数据进行加工
  getters: {
    count: state => state.count,
    todos: state => state.todos,
    todoCount: state => state.todos.length  // 计算待办事项的总数
  }
}) 