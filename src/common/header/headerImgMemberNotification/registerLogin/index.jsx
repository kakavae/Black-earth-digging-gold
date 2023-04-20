import React from 'react'
import './index.css'
import { useContext } from 'react'
import { isDisplayContext } from '../../../../context/app'
import useNotifacationList from '../../../../useHooks/headerImgMemberNotifacation'
import PubSub from 'pubsub-js'

export default function RegisterLogin() {
  /* 鼠标经过的时候显示登录下拉，离开隐藏 */
  const {
    isDisplay,
    display,
    noDisplay
  } = useNotifacationList()

  /* 是否显示组件自身 */
  const { userInfo } = useContext(isDisplayContext)

  /* 发布消息，通知LoginRegister组件显示自身 */
  const publishDisplay = () => {
    PubSub.publish('displayLoginRegister', true)
  }
  return (
    <div
      onMouseOver={display}
      onMouseLeave={noDisplay}
      onClick={publishDisplay}
      className='registerLogin__div--container'
      style={{
        display: userInfo.id ? 'none' : 'block'
      }}>
      <button>登录</button>
      <button>注册</button>
      <div
        style={{
          display: isDisplay ? 'block' : 'none'
        }}
        className='registerLogin__div--loginmenu'>
        <div className='registerLogin__div--arrow'></div>
        <div className='registerLogin__div--loginNowContainer'>
          <h3>登录掘金后可立即获得以下权益：</h3>
          <ul>
            <li>免费试学课程</li>
            <li>收藏有用文章</li>
            <li>查阅浏览足迹</li>
            <li>订阅优质专栏</li>
            <li>体验签到抽奖</li>
            <li>提升成长等级</li>
          </ul>
          <div className='registerLogin__div--loginNowflex'>
            <button onClick={publishDisplay}>立即登录</button>
            <div>首次使用？<a href="/">点我注册</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}
