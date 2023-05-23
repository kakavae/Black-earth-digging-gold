export default function throttle(fn, delay) {
  let timer = null
  return () => {
    if (!timer) {
      fn()
      timer = setTimeout(() => {
        window.clearTimeout(timer)
        timer = null
      }, delay)
    }
  }
}