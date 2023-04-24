import React from 'react'
import './index.css'
import RecommondArtical from '../../../common/homeMainContent/recommondUpdate/recommondArtical'

export default function personalhomepagepublishPublish({ articalList }) {
  const publishList = [
    { id: '1', title: '动态', url: '/' },
    { id: '2', title: '文章', url: '/' },
    { id: '3', title: '专栏', url: '/' },
    { id: '4', title: '沸点', url: '/' },
    { id: '5', title: '收藏集', url: '/' },
    { id: '6', title: '关注', url: '/' },
    { id: '7', title: '赞', url: '/' },
  ]
  return (
    <div className='personalhomepagepublish__div--leftbottom'>
      <div className='personalhomepagepublish__div--listflex'>
        <ul className='personalhomepagepublish__ul--list'>
          {publishList.map((item) => {
            return <li key={item.id}><a href={item.url}>{item.title}</a></li>
          })}
        </ul>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon" ><path d="M12.4008 12.4008C14.744 10.0577 14.744 6.25871 12.4008 3.91556C10.0577 1.57242 6.25871 1.57242 3.91556 3.91556C1.57242 6.25871 1.57242 10.0577 3.91556 12.4008C6.25871 14.744 10.0577 14.744 12.4008 12.4008ZM12.4008 12.4008L15.5828 15.5828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </div>
      <div className='personalhomepagepublish__div--publishlist'>
        {articalList.map((item) => {
          item = {
            ...item,
            /* 请求到的文章列表渲染的时候要修改部分字段 */
            classification: item.classification.split(' '),
            url: '/post/' + item.id
          }
          return <RecommondArtical
            key={item.id}
            articalInfo={item}
          ></RecommondArtical>
        })}
      </div>
    </div>
  )
}
