import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 定义一个 store
export const useCounterStore = defineStore('counter', () => {
  // 状态
  const count = ref(0)
  
  // 计算属性
  const doubleCount = computed(() => count.value * 2)
  
  // action（方法）
  function increment() {
    count.value++
  }
  
  function decrement() {
    if (count.value > 0) {
      count.value--
    }
  }

  return {
    count,
    doubleCount,
    increment,
    decrement
  }
})
