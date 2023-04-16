/* 
  输入需要维护的静态列表，不是修改列表项，而是返回当前活跃的项的id和修改活跃项id的函数
*/
import { useHref } from "react-router-dom"
import { useState } from "react"

const useMenuList = (initialListState, initialNum = 1) => {
  /* 1.解决任意路由刷新后被点击的菜单总是回到综合的问题---选出当前路由匹配的那个数据
将里面的id作为点击时活跃id的初始值 */
  /* 如果item里面有一项id匹配成功了，就将那个设置为初始id，否则设置Symbol() */
  let inicalId
  const href = useHref()
  const activeModule = (initialListState.filter((item) => {
    return item.url === href
  }))[0]
  if (activeModule) {
    inicalId = activeModule.id
  } else {
    inicalId = initialListState[initialNum] ? (initialListState[initialNum]).id : Symbol()
  }

  /* 控制字体颜色 --通过修改这个id和item.id对比，为true的就添加样式*/
  /* 当前活跃的菜单 */
  const [acticeId, setActiveId] = useState(Symbol())
  /* 当前被点击的菜单的id */
  const [focuseId, setFocuseId] = useState(inicalId)

  /* 鼠标经过，修改样式 */
  /* 设置为id -1就是所有的都没有样式 */
  const changeActive = (id) => {
    return () => {
      setActiveId(id)
    }
  }
  /* 鼠标点击修改样式 */
  const turnMenu = (id) => {
    return () => {
      setFocuseId(id)
    }
  }
  // console.log('@', initialListState)
  return {
    acticeId,
    focuseId,
    changeActive,
    turnMenu
  }
}

export default useMenuList