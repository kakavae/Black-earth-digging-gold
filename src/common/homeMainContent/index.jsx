import React from 'react'
import './index.css'
import RecommondUpdate from './recommondUpdate'
import ThreeModule from './threeModule'
import { useHref } from 'react-router-dom'

/* 每次loader 发送请求获取文章更新的状态，useLoaderData收到状态之后渲染列表 */
/* 这个组件下面的两个列表都要重新渲染 而且你loader的时候要获取路径参数，发送请求的时候要用到---不同的路径下面发送的请求不一样 */

export default function HomeMainContent() {

  const href = useHref()
  const isDisplay = href !== '/following'

  /* 如果当前的useHref是/following，就不显示三大模块和推荐更新的标题 */
  return (
    <div>
      {/* 三大模块 */}
      <ThreeModule isDisplay={isDisplay}></ThreeModule>
      {/* 文章模块--推荐和最新 */}
      <RecommondUpdate isDisplay={isDisplay}></RecommondUpdate>
    </div>
  )
}
