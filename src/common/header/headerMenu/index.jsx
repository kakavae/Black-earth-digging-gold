import React from 'react'
import './index.css'
import { useState } from 'react'

export default function HeaderMenu() {
  const ACTIVEMENULENGTH = 6
  // 菜单图
  const homeMenuList = [
    { id: 1, content: '首页' },
    { id: 2, content: '沸点' },
    { id: 3, content: '课程' },
    { id: 4, content: '直播' },
    { id: 5, content: '活动' },
    { id: 6, content: '竞赛' },
    { id: 7, content: '商城' },
    { id: 8, content: 'App' },
    { id: 9, content: '插件' },
  ]
  // 下划线的定位
  const [bottomLineLeft, setBottomLineLeft] = useState('0px')
  // 下划线显示与否
  const [isDisplay, setIsDisplay] = useState(false)
  // 当前活跃的菜单
  const [activeMenuId, setActiveMenuId] = useState(homeMenuList[0].id)

  // 控制下划线显示
  const moveBootomLine = (event) => {
    const index = event.target.dataset.index
    if (index >= 0 && index <= 5) {
      setIsDisplay(true)
      // a和li的宽度一样，所以直接用a的
      setBottomLineLeft(index * event.target.offsetWidth + 'px')
    } else {
      setIsDisplay(false)
    }
  }
  // 下划线消失
  const changeDisplay = () => {
    setIsDisplay(false)
  }
  // 菜单跳转
  const changeMenu = (id) => {
    return (event) => {
      event.preventDefault()
      console.log(id, ACTIVEMENULENGTH, '跳转路由')
      if (id <= ACTIVEMENULENGTH) {
        setActiveMenuId(id)
      }
    }
  }

  return (
    <ul
      className="header__ul--menubfc"
      onMouseOver={moveBootomLine}
      onMouseLeave={changeDisplay}
    >
      {homeMenuList.map((item, index) => {
        return <li key={item.id}>
          <a
            href="/" className="header__ul__a--color"
            data-index={index}
            style={{ color: activeMenuId === item.id ? 'var(--juejin-brand-1-normal)' : 'var(--juejin-font-2)' }}
            onClick={changeMenu(item.id)}
          >{item.content}
          </a></li>
      })}
      <li
        className="header__li--bottomline"
        style={{
          left: bottomLineLeft,
          display: isDisplay ? 'block' : 'none'
        }}></li>
    </ul>
  )
}
