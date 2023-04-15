import React from 'react'
// import { useRoutes } from 'react-router-dom'
import './index.css'
import NavLeft from '../../common/navLeft'
import Aside from '../../common/aside'
import HomeMainContent from '../../common/homeMainContent'

export default function Home({ isDisplayHeader }) {
  // const element = useRoutes(router)
  return (
    /* 控制版心的盒子的位置 */
    <div className='Home__div--bgc'>
      <div className="Home__div--container">
        <div className="Home__div--view">
          {/* 左侧导航区 */}
          <NavLeft isDisplayHeader={isDisplayHeader}></NavLeft>
          {/* 中间模块 设置了flex: 1 */}
          <div className="Home__div--maincontent--w">
            {/* App组件，根组件\，下方有navLeft指定的所有子组件 */}
            <HomeMainContent></HomeMainContent>
          </div>
          {/* 右边的aside */}
          <Aside></Aside>
        </div>
      </div>
    </div>
  )
}
