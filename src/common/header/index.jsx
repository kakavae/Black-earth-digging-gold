import React from 'react'
import './index.css'
import HeaderSearch from './headerSearch'
import HeaderMenu from './headerMenu'
import HeaderImgMemberNotification from './headerImgMemberNotification'
import { useState } from 'react'

export default function Header({ isDisplayHeader }) {
  return (
    <div className='header__div--maxcontainer'>
      <div className="header__header--container" style={{ transform: isDisplayHeader ? '' : 'translateY(-60px)' }}>
        <div>
          <a href="/" className="header__a--logo">
            <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="logo" />
          </a>
          <HeaderMenu></HeaderMenu>
        </div>
        <ul className="header__ul--rightcontentfloat">
          <HeaderSearch></HeaderSearch>
          <HeaderImgMemberNotification></HeaderImgMemberNotification>
        </ul>
      </div>
    </div>
  )
}
