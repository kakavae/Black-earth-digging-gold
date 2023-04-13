export default function throttle(fn, delay) {
  let timer = null
  return ()=>{
    if(!timer) {
      fn()
      setTimeout(()=>{
        window.clearTimeout(timer)
        timer = null
      }, delay)
    }
  }
}