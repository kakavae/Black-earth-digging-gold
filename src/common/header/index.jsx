import React from 'react'
import './index.css'
import HeaderSearch from './headerSearch'
import HeaderMenu from './headerMenu'
import HeaderCreatorDetail from './headerCreatorDetail'
import { useState } from 'react'

export default function Header({ isDisplayHeader }) {
  // 获取创作者中心的div的位置，给下面新出的菜单定位用，控制变量存储在两个子组件的父级组件
  const [right, setRight] = useState(0)
  return (
    <div className='header__div--maxcontainer'>
      <div className="header__header--container" style={{ transform: isDisplayHeader ? '' : 'translateY(-60px)' }}>
        <div>
          <a href="/" className="header__a--logo">
            <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="logo" />
          </a>
          <HeaderMenu></HeaderMenu>
        </div>
        <div>
          <ul className="header__ul--rightcontentfloat">
            <li className="header__li--headerimg">
              <div className="header__div--headerimg">
                <img src="https://p3-passport.byteimg.com/img/mosaic-legacy/3793/3131589739~100x100.awebp" alt="" />
              </div>
            </li>
            <li className="header__li--notification">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="notification-icon" data-v-25e3b163=""><path d="M6.01132 10.2856C6.28115 6.54234 8.68619 4.28564 11.9999 4.28564C15.3136 4.28564 17.7186 6.54234 17.9885 10.2856C18.1219 12.1363 18.4093 13.708 19.9473 15.8848C20.1889 16.2267 19.953 16.7142 19.5343 16.7142H4.46546C4.04679 16.7142 3.81092 16.2267 4.05252 15.8848C5.59053 13.708 5.87793 12.1363 6.01132 10.2856Z" strokeWidth="1.5" strokeLinecap="round"></path><path d="M11.9573 3.21436V4.28578" strokeWidth="3" strokeLinecap="round" data-v-25e3b163=""></path><path d="M9.57495 18.8569C9.92795 19.8557 10.8804 20.5712 12.0001 20.5712C13.1197 20.5712 14.0722 19.8557 14.4252 18.8569H9.57495Z" strokeLinecap="round" strokeLinejoin="round" data-v-25e3b163=""></path></svg>
              <span>&nbsp;3&nbsp;</span>
            </li>
            <li className="header__li--member">
              <div className="vip--title">
                <div className="vip--img">
                  <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg" alt="" />
                </div>
                <div className="vip--words">会员</div>
              </div>
            </li>
            <HeaderSearch setRight={setRight}></HeaderSearch>
          </ul>
        </div>
      </div>
      <HeaderCreatorDetail right={right}></HeaderCreatorDetail>
    </div>
  )
}
