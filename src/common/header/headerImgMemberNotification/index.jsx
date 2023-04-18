import React, { useEffect, useState } from 'react'
import './index.css'
import HeaderImgMember from './headerImgMember'
import RegisterLogin from './registerLogin'
import { isLoginContext } from '../../../context/headerImgmember.js'
import PubSub from 'pubsub-js'

export default function HeaderImgMemberNotification() {
  /* 控制登录和未登录的状态显示不同的组件 */
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    PubSub.subscribe('setIslogin', (msg, data) => {
      setIsLogin(data)
    })
  })
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
      <isLoginContext.Provider value={{ isLogin, setIsLogin }}>
        <HeaderImgMember></HeaderImgMember>
        <RegisterLogin></RegisterLogin>
      </isLoginContext.Provider>
    </>
  )
}
