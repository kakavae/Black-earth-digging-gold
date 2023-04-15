import React, { useEffect, useState } from 'react'
import './index.css'
import RecommondUpdate from './recommondUpdate'
import ThreeModule from './threeModule'
import { useHref } from 'react-router-dom'

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
