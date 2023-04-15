import React from 'react'
import './index.css'
import RecommondArtical from './recommondArtical'
import RecommondSelectList from './recommondSelectList'

export default function RecommondUpdate({ isDisplay }) {
  return (
    <div className='recommondupdate__div--container'>
      {/* 如果useHref是following，就不显示推荐更新标题 */}
      <div
        className='recommondupdate__div--reup'
        style={{
          display: isDisplay ? 'flex' : 'none'
        }}
      >
        <div>
          <a href="/" className='recommondupdate__a--re'>推荐</a>
          <a href="/" className='recommondupdate__a--up'>最新</a>
        </div>
        <RecommondSelectList></RecommondSelectList>
      </div>
      {/* 文章详情部分 */}
      <div>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
      </div>
    </div>
  )
}
