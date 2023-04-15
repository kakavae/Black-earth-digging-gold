import React from 'react'
import './index.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function HeaderMenu() {
  const ACTIVEMENULENGTH = 6
  // 菜单图
  const homeMenuList = [
    { id: 1, content: '首页', url: '' },
    { id: 2, content: '沸点', url: '/pins' },
    { id: 3, content: '课程', url: '/pins' },
    { id: 4, content: '直播', url: '/pins' },
    { id: 5, content: '活动', url: '/pins' },
    { id: 6, content: '竞赛', url: '/pins' },
    { id: 7, content: '商城', url: '/pins' },
    { id: 8, content: 'App', url: '/pins' },
    { id: 9, content: '插件', url: '/pins' },
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
      // event.preventDefault()
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
          <Link
            to={item.url} className="header__ul__a--color"
            data-index={index}
            style={{ color: activeMenuId === item.id ? 'var(--juejin-brand-1-normal)' : 'var(--juejin-font-2)' }}
            onClick={changeMenu(item.id)}
          >{item.content}
          </Link></li>
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
