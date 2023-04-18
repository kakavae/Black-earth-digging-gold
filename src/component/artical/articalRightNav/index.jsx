import React from 'react'
import './index.css'

export default function ArticalRightNav({ articalInfo: {
  author,
  authorHeaderImg
} }) {
  return (
    <nav className='articalrightnav__nav--rightabsolute'>
      <div className='articalrightnav__div--articleinfo'>
        <div className='articalrightnav__div--authorflex'>
          <img src={authorHeaderImg} alt="" />
          <span>{author}</span>
        </div>
        <div className='articalrightnav__div--buttoncontainer'>
          <button>关注</button>
          <button>私信</button>
        </div>
        <div className='articalrightnav__div--likes'>
          <span>获得点赞：</span>
          <span>文章被阅读：</span>
        </div>
      </div>
      <a href="/" className='articalrightnav__a--membercontainer'>
        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/sign-in.d6891e5.png" alt="" />
      </a>
      <div className='articalrightnav__div--group'>
        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png" alt="" />
        <span></span>
      </div>
    </nav>
  )
}
