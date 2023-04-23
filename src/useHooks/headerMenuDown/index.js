/* 实现下拉菜单功能的钩子 */
import { useRef, useEffect } from "react"
import useNotifacationList from "../headerImgMemberNotifacation"

const useMenu = () => {
  const menu = useRef()
  /* 鼠标点击控制下拉菜单的显示与隐藏 */
  const { isDisplay, display, noDisplay } = useNotifacationList()

  const changeDisplay = () => {
    if (isDisplay) {
      noDisplay()
    } else {
      display()
    }
  }

  useEffect(() => {
    document.addEventListener('click', (event) => {
      /* 只要当前组件里面最大的盒子不包含触发事件的那个节点，就说明鼠标点击的是盒子外面 */
      if (menu.current) {
        if (!menu.current.contains(event.target)) {
          noDisplay()
        }
      }
    })
  }, [])

  return { isDisplay, changeDisplay, menu }
}

export default useMenu