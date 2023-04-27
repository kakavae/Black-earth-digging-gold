import React from 'react'
import Header from './common/header'
import { useEffect, useState } from 'react'
import throttle from './useFunction/throttle'
import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import LoginRegister from './common/loginRegister'
import { reqUserInfo } from './api'
import { getToken, removeToken } from './useFunction/token'

/* 提供context */
import { isDisplayContext } from './context/app'

export const loader = async () => {
  if (getToken()) {
    try {
      const data = await reqUserInfo()
      console.log('@拿着token请求数据，这时候在服务器没启动的时候好像会报错', data, getToken())

      if (data.code === 200) {
        console.log('indivaidual', data)
        /* 修改当前组件的用户名 ---- 全局的context用户名需要根据回来的数据渲染*/
        return data.data
      } else if (data.code === 208) {
        console.log('token过期')
        /* token过期，需要重新登录，清除存储的localStorage里面的token */
        removeToken()
        return {
          msg: 'token过期'
        }
      } else {
        console.log(data)
        return data
      }
    } catch (e) {
      console.log(e)
    }
  } else {
    return {}
  }
}

export default function App() {

  /* 管理全局的用户登录信息 */
  /* 疑问，如果loader配合action，setUserInfo是否不是必须的？ */
  /* 那么退出登录应该如何做？ */
  // const [userInfo, setUserInfo] = useState(useLoaderData())

  const [isDisplayHeader, setIsDisplayHeader] = useState(true)

  const userInfo = useLoaderData()
  // setUserInfo({})

  /* 监听scroll事件，隐藏头部，还有更改右侧栏目中广告的位置 */
  /* 监听scroll事件---或者说，利用IntersectionObserver API，移动广告组件 */
  const throttleHidden = throttle(() => {
    if (window.scrollY >= 500) {
      setIsDisplayHeader(false)
    } else {
      setIsDisplayHeader(true)
    }
  }, 10)

  useEffect(() => {
    window.addEventListener('scroll', throttleHidden)
  }, [throttleHidden])

  return (
    <div>
      <isDisplayContext.Provider
        value={{
          isDisplayHeader,
          setIsDisplayHeader,
          userInfo,
          setUserInfo: () => { }
        }}>
        <Header></Header>
        <Outlet></Outlet>
        <LoginRegister></LoginRegister>
      </isDisplayContext.Provider>
    </div>
  )
}
