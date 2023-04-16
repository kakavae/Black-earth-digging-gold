import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

/* 导入导航栏的hooks */
/* 导入headerMenu的hooks--其中又导入了导航栏的hooks */
import useHeaderList from '../../../useHooks/headerMenu'

export default function HeaderMenu() {
  // 菜单图
  const homeMenuList = [
    { id: 1, title: '首页', url: '' },
    { id: 2, title: '沸点', url: '/pins' },
    { id: 3, title: '课程', url: '/course' },
    { id: 4, title: '直播', url: '/live' },
    { id: 5, title: '活动', url: '/events' },
    { id: 6, title: '竞赛', url: '/challenge' },
    // { id: 7, content: '商城', url: '/pins' },
    // { id: 8, content: 'App', url: '/pins' },
    // { id: 9, content: '插件', url: '/pins' },
  ]

  /* active控制鼠标经过 focus控制鼠标点击 */
  const { focuseId, turnMenu, bottomLineLeft, isDisplay, moveBootomLine, noDisplay } = useHeaderList(homeMenuList, 0)

  return (
    <ul
      className="headermenu__ul--menubfc"
      onMouseOver={moveBootomLine}
      onMouseLeave={noDisplay}
    >
      {homeMenuList.map((item, index) => {
        return <li key={item.id}>
          <Link
            to={item.url} className="headermenu__ul__a--color"
            data-index={index}
            style={{ color: focuseId === item.id ? 'var(--juejin-brand-1-normal)' : 'var(--juejin-font-2)' }}
            onClick={turnMenu(item.id)}
          >{item.title}
          </Link>
        </li>
      })}
      <li
        className="headermenu__li--bottomline"
        style={{
          left: bottomLineLeft,
          display: isDisplay ? 'block' : 'none'
        }}></li>
    </ul>
  )
}
