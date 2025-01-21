import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  // 状态
  const count = ref(initialValue)

  // 计算属性
  const doubleCount = computed(() => count.value * 2)

  // 方法
  const increment = () => {
    count.value++
  }

  const decrement = () => {
    if (count.value > 0) {
      count.value--
    }
  }

  const reset = () => {
    count.value = initialValue
  }

  return {
    count,
    doubleCount,
    increment,
    decrement,
    reset
  }
} 