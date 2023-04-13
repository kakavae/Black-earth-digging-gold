import React from 'react'
import './index.css'
import RecommondArtical from './recommondArtical'

export default function RecommondUpdate() {
  return (
    <div className='recommondupdate__div--container'>
      <div className='recommondupdate__div--reup'>
        <a href="/" className='recommondupdate__a--re'>推荐</a>
        <a href="/" className='recommondupdate__a--up'>最新</a>
        <div class="recommondupdate__div--center">
          <select name="classification" id="" className='recommondupdate__select'>
            <option value="全部">全部</option>
            <option value="前端">前端</option>
            <option value="后端">后端</option>
            <option value="Vue.js">Vue.js</option>
          </select>
        </div>
      </div>
      {/* 文章详情部分 */}
      <div>
        <RecommondArtical></RecommondArtical>
      </div>
    </div>
  )
}
