import React from 'react'
import './index.css'

export default function CreatorHomeDataCenter() {
  return (
    <div className='creatorhomedatacenter__div--container'>
      <div><span>数据概览</span><a href='/'>查看更多</a></div>
      <ul className='creatorhomedatacenter__ul--flex'>
        <li>总粉丝数<br></br><span>0</span></li>
        <li>文章展现数<br></br><span>0</span></li>
        <li>文章阅读数<br></br><span>0</span></li>
        <li>文章点赞数<br></br><span>0</span></li>
        <li>文章评论数<br></br><span>0</span></li>
        <li>文章收藏数<br></br><span>0</span></li>
      </ul>
    </div>
  )
}
