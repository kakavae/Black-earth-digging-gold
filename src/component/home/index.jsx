import React from 'react'
import './index.css'
import NavLeft from '../../common/navLeft'
import ThreeModule from '../../common/threeModule'
import Aside from '../../common/aside'
import RecommondUpdate from '../../common/recommondUpdate'

export default function Home() {
  return (
    /* 控制版心的盒子的位置 */
    <div className='Home__div--bgc'>
      <div className="Home__div--container">
        <div className="Home__div--view">
          {/* 左侧导航区 */}
          <NavLeft></NavLeft>
          {/* 中间模块 设置了flex: 1 */}
          <div className="Home__div--maincontent--w">
            {/* 三大模块 */}
            <ThreeModule></ThreeModule>
            {/* 文章模块--推荐和最新 */}
            <RecommondUpdate></RecommondUpdate>
          </div>
          {/* 右边的aside */}
          <Aside></Aside>
        </div>
      </div>
    </div>
  )
}
