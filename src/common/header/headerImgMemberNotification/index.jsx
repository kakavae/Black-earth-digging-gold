import React from 'react'
import './index.css'
import HeaderImgMember from './headerImgMember'
import RegisterLogin from './registerLogin'

export default function HeaderImgMemberNotification() {

  return (
    <>
      {/* 会员区域 */}
      <li className="headerimgmembernotification__li--member">
        <div className="vip--title">
          <div className="vip--img">
            <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg" alt="" />
          </div>
          <div className="vip--words">会员</div>
        </div>
      </li>
      <HeaderImgMember></HeaderImgMember>
      <RegisterLogin></RegisterLogin>
    </>
  )
}
