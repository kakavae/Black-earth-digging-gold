import React, { useContext } from 'react'
import './index.css'
import { reqLogout } from '../../../../../api'
import { removeToken } from '../../../../../useFunction/token'
import { isDisplayContext } from '../../../../../context/app'
import { Link, redirect, useSubmit } from 'react-router-dom'

/* 使用loader在根组件挂载的时候的路由上面使用，这样每次只要刷新页面就会用token请求资源 */
/* 但是这样请求的资源次数太多了，可以在本地保存一个登录状态，第一次请求成功之后修改登录状态之后便不再请求 */
export const action = async ({ request }) => {
  /* 获取表单或者submit提交的数据 */
  const formData = await request.formData();
  const data = Object.fromEntries(formData)

  /* 和登录公用一个action，所以需要判断类型 */
  /* 因为只要触发了action就会让所有的loader再走一次，为了让每一个组件都拿到最新的用户数据，所以注册和登录都要走action */
  /* 因为登录的时候还要修改组件的显示状态，所以请求在组件自身发出，只不过触发了一个只有type的action */
  /* action就是一个函数，会根据submit或者form的action匹配对应的路径然后触发对应的声明的action */
  if (data.type === 'logout') {
    const logoutData = await reqLogout(data.id)
    if (logoutData.code === 200) {
      /* logout触发action, 里面清除了token，所有的loader都要重新加载一次，
      获取用户信息的loader加载的结果依赖于token，所以可以直接获取到用户到底有没有登录的结果而渲染页面 */
      removeToken()
      return logoutData
    } else {
      return { msg: '退出登录失败' }
    }
  } else if (data.type === 'login') {
    return redirect('/')
  } else {
    return {
      msg: '无效action的type'
    }
  }
}

export default function IndividualCenter({ isDisplayIndividualMenu, changeDisplay }) {
  const { userInfo } = useContext(isDisplayContext)

  let submit = useSubmit();

  /* 拿着token请求服务器，服务器根据token返回用户名---还有其他数据---把这个的逻辑改为loader */
  // useEffect(() => {
  //   if (getToken()) {
  //     const getUserInfo = async () => {
  //       try {
  //         const data = await reqUserInfo()
  //         console.log('@拿着token请求数据，这时候在服务器没启动的时候好像会报错', data, getToken())

  //         if (data.code === 200) {
  //           console.log('indivaidual', data)
  //           /* 修改当前组件的用户名 ---- 全局的context用户名需要根据回来的数据渲染*/
  //           const { userName, id, email } = data.data
  //           setUserInfo({ ...userInfo, userName, id, email })
  //         } else if (data.code === 208) {
  //           console.log('token过期')
  //           /* token过期，需要重新登录，清除存储的localStorage里面的token */
  //           removeToken()
  //         } else {
  //           console.log(data)
  //         }
  //       } catch (e) {
  //         console.log(e)
  //       }
  //     }
  //     getUserInfo()
  //   }
  // }, [])

  /* 退出登录 ---- 以params参数的形式发送用户数据*/
  /* 这个logout也应该以loader的形式发送出去数据，这样app的action才能检测到action了一个新的数据，才会loader新的数据 */
  const logout = async () => {
    submit({
      type: 'logout',
      id: userInfo.id
    }, {
      action: "/",
      method: 'post'
    })
  }

  return (
    <div
      className='individualcenter__div--container'
      style={{
        display: isDisplayIndividualMenu ? 'block' : 'none'
      }}
    >
      <h3>用户名：{userInfo.userName}</h3>
      <p>矿石: 0
        掘友等级 JY.3
        71 / 150</p>

      <p>关注0
        赞过0 收藏36</p>
      <ul className='individualcenter__ul--myhomelist'>
        <li><Link onClick={() => { changeDisplay() }} to={'/user/' + userInfo.id}>我的主页</Link></li>
        <li><a href="/">成长福利</a></li>
        <li><a href="/">闪念笔记</a></li>
        <li><a href="/">会员中心</a></li>
        <li><a href="/">课程中心</a></li>
        <li><a href="/">我的优惠</a></li>
        <li><a href="/">我的报名</a></li>
        <li><a href="/">我的足迹</a></li>
      </ul>
      <div className='individualcenter__div--logout'>
        <button>我的设置</button>
        <button onClick={logout}>退出登录</button>
      </div>
    </div>
  )
}
