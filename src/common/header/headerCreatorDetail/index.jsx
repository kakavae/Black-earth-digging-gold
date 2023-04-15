import React from 'react'
import './index.css'

export default function HeaderCreatorDetail({ right }) {
  // 创作者中心的选择
  const creatorSlect = [
    { id: 1, title: '写文章' },
    { id: 2, title: '发沸点' },
    { id: 3, title: '写笔记' },
    { id: 4, title: '去跳舞' },
    { id: 5, title: '草稿箱' }
  ]
  const active = [
    { id: 1, title: '活动', content: '一起来黑土旅行吧！！！' },
    { id: 2, title: '活动', content: '一起来黑土旅行吧！！！' },
    { id: 3, title: '活动', content: '一起来黑土旅行吧！！！' }
  ]

  return (
    <div
      className='headerCreator__div--creatorContainer'
      style={{
        /* 直接利用right的是否为0显示和隐藏元素，不用再传递另外一个变量 */
        right: right + 'px',
        display: right ? 'block' : 'none'
      }}>
      <ul className='headerCreatorDetail__ul--container'>
        {creatorSlect.map((item) => {
          return <li
            key={item.id}>
            <a
              href="/"
              className='headerCreatorDetail__a--link'
            >
              <img src="" alt="" />
              <span>{item.title}</span>
            </a></li>
        })}
      </ul>
      <div className='headerCreatorDetail__div--more'>
        <h3>创作灵感</h3>
        <a href="/">查看更多</a>
      </div>
      <ul className="headerCreatorDetail__ul--active">
        {active.map((item) => {
          return <li key={item.id} className="headerCreatorDetail__li--activecontainer">
            <i>{item.title}</i>
            <a href='/'>{item.content}</a>
          </li>
        })}
      </ul>
    </div>
  )
}
