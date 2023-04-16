import { useState } from "react"

/* 当经过某一个元素的时候控制另外一个元素的显示与隐藏 */
const useNotifacationList = (inicalState = false) => {
  const [isDisplay, setIsDisplay] = useState(inicalState)
  // 控制下划线显示
  const display = () => {
    setIsDisplay(true)
  }
  // 下划线消失
  const noDisplay = () => {
    setIsDisplay(false)
  }
  return {
    isDisplay,
    display,
    noDisplay
  }
}

export default useNotifacationList