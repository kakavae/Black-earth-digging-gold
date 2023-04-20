import React, { useEffect, useContext } from 'react'
import './index.css'
import { reqUserInfo, reqLogout } from '../../../../../api'
import { getToken, removeToken } from '../../../../../useFunction/token'
import { isDisplayContext } from '../../../../../context/app'

/* 使用loader在根组件挂载的时候的路由上面使用，这样每次只要刷新页面就会用token请求资源 */
/* 但是这样请求的资源次数太多了，可以在本地保存一个登录状态，第一次请求成功之后修改登录状态之后便不再请求 */

export const loader = () => { }

export default function IndividualCenter({ isDisplayIndividualCenter, noDisplayIndividualCenter }) {
  const { userInfo, setUserInfo } = useContext(isDisplayContext)

  /* 拿着token请求服务器，服务器根据token返回用户名---还有其他数据---把这个的逻辑改为loader */
  useEffect(() => {
    if (getToken()) {
      const getUserInfo = async () => {
        try {
          const data = await reqUserInfo()
          console.log('@拿着token请求数据，这时候在服务器没启动的时候好像会报错', data, getToken())
          if (data.code === 200) {
            console.log('indivaidual', data)
            /* 修改当前组件的用户名 ---- 全局的context用户名需要根据回来的数据渲染*/
            const { userName, id, email } = data.data
            setUserInfo({ ...userInfo, userName, id, email })
          } else if (data.code === 208) {
            console.log('token过期')
            /* token过期，需要重新登录，清除存储的localStorage里面的token */
            removeToken()
          } else {
            console.log(data)
          }
        } catch (e) {
          console.log(e)
        }
      }
      getUserInfo()
    }
  }, [])

  /* 退出登录 ---- 以params参数的形式发送用户数据*/
  const logout = async () => {
    const logoutData = await reqLogout(userInfo.id)
    console.log('退出后收到返回数据', logoutData)
    if (logoutData.code === 200) {
      /* 删除本地token */
      removeToken()
      /* 设置当前组件的登录状态 --- 清空全局的用户信息*/
      setUserInfo({ id: null, userName: '', imgUrl: '' })
      /* 设置当前组件的显示状态 */
      noDisplayIndividualCenter()
    } else {
      alert('退出失败，请重试')
    }
  }
  return (
    <div
      className='individualcenter__div--container'
      style={{
        display: isDisplayIndividualCenter ? 'block' : 'none'
      }}
    >
      <h3>用户名：{userInfo.userName}</h3>
      <p>矿石: 0
        掘友等级 JY.3
        71 / 150</p>

      <p>关注0
        赞过0 收藏36</p>
      <ul>
        <li>我的主页</li>
        <li>成长福利</li>
        <li>闪念笔记</li>
        <li>会员中心</li>
        <li>课程中心</li>
        <li>我的优惠</li>
        <li>我的报名</li>
        <li>我的足迹</li>
      </ul>
      <div className='individualcenter__div--logout'>
        <button>我的设置</button>
        <button onClick={logout}>退出登录</button>
      </div>
    </div>
  )
}
