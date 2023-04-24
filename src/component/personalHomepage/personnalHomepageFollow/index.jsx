import React from 'react'
import './index.css'

export default function PersonnalHomepageFollow() {
  return (
    <div className='personalhomepagefollow__div--userright'>
      <div className='personalhomepagefollow__div--followflex'>
        <div>
          <div>关注了</div>
          <div>0</div>
        </div>
        <div>
          <div>关注者</div>
          <div>0</div>
        </div>
      </div>
      <ul className='personalhomepagefollow__ul--collection'>
        <li>收藏集</li>
        <li>关注标签</li>
        <li>加入于</li>
      </ul>
    </div>
  )
}
