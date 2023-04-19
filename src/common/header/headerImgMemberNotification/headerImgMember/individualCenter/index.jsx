import React, { useEffect, useState } from 'react'
import PubSub from 'pubsub-js'
import './index.css'
import { reqUserInfo } from '../../../../../api'
import { getToken, setToken, removeToken } from '../../../../../useFunction/token'

export default function IndividualCenter() {
  const [userInfo, setUserInfo] = useState({ userName: '', imgUrl: '' })
  /* 拿着token请求服务器，服务器根据token返回用户名---还有其他数据 */
  useEffect(() => {
    // console.log(getToken())
    if (getToken()) {
      const getUserInfo = async () => {
        try {
          const data = await reqUserInfo()
          console.log(data)
          if (data.code === 200) {
            /* 修改当前组件的用户名 */
            const userName = data.data.userName
            setUserInfo({ ...userInfo, userName: userName })
            /* 修改HeaderImgMemberNotification组件维护的isLogin与否 */
            PubSub.publish('setIslogin', true)
          } else if (data.code === 208) {
            /* token过期，需要重新登录，清除存储的localStorage里面的token */
            removeToken()
          }
        } catch (e) {
          console.log(e)
        }
      }
      getUserInfo()
    }

    PubSub.subscribe('setUserInfo', (msg, data) => {
      console.log(data)
      setUserInfo({ ...userInfo, userName: data.userName })
      /* 拿到token，之后请求有权限的接口都需要携带token */
      console.log('IndividualCenter', window.localStorage.getItem('token'))
    })
  }, [])
  return (
    <div className='individualcenter__div--container'>
      {userInfo.userName}
      矿石: 0
      掘友等级 JY.3
      71 / 150
      0
      关注
      0
      赞过
      36
      收藏
      我的主页
      成长福利
      闪念笔记
      会员中心
      课程中心
      我的优惠
      我的报名
      我的足迹
      我的设置
      退出登录</div>
  )
}
