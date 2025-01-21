import { ref, onMounted, onUnmounted } from 'vue'

// 追踪鼠标位置的 hook
export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  const updatePosition = (e) => {
    x.value = e.clientX
    y.value = e.clientY
  }

  onMounted(() => {
    window.addEventListener('mousemove', updatePosition)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', updatePosition)
  })

  return { x, y }
} 