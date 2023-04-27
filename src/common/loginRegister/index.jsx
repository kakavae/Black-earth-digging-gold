import React, { useState, useEffect, useContext } from 'react'
import './index.css'
import useNotifacationList from '../../useHooks/headerImgMemberNotifacation'
import PubSub from 'pubsub-js'
import { reqRegisterCode, reqRequestLogin } from '../../api'
import { Form, useSubmit } from 'react-router-dom'
import { isDisplayContext } from '../../context/app'
import { setToken } from '../../useFunction/token'

export const action = async ({ request }) => {
  const formData = await request.formData()

  console.log(Object.fromEntries(formData))
  /* 规则校验 */
  // if (code && email) {
  //   try {
  //     const loginData = await reqRequestLogin({ email, code })
  //     /* 隐藏当前组件，渲染头像用户名，存储token */
  //     if (loginData.code === 200) {
  //       console.log(loginData, '登陆成功隐藏当前组件，渲染头像用户名，存储token')
  //       noDisplay()
  //       /* 渲染用户名和头像---修改全局的userinfo context */
  //       setUserInfo({ ...userInfo, ...loginData.data })
  //       /* 修改本地存储的token */
  //       setToken(loginData.data.token)
  //     } else {
  //       alert('请重新登录')
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
}

export default function LoginRegister() {

  /* 是否显示当前组件 */
  const { isDisplay, display, noDisplay } = useNotifacationList()

  /* 保存邮箱数据 */
  const [email, setEmail] = useState('')
  /* 保存验证码数据 */
  const [code, setCode] = useState('')

  /* 点击获取验证码之后30s倒计时开启*/
  const [countDown, setCountDown] = useState(30)
  /* 如果设置为true就是显示获取成功 */
  const [isSuccess, setIsSuccess] = useState(false)

  const countDownFun = (countInit, setCount, setIsSuccess, btnDom) => {
    const maxCount = countInit
    /* 成功，开始计时之前，修改btn警用 */
    btnDom.disabled = true
    /* 修改布尔值，发送成功，1.控制显示发送成功，2.鼠标禁用样式，3.显示倒计时文字 */
    setIsSuccess(true)
    let timer = setInterval(() => {
      countInit--
      setCount(countInit)
      if (countInit === 0) {
        window.clearInterval(timer)
        timer = null
        /* 倒计时结束，恢复初始样式，恢复btn使用 */
        setCount(maxCount)
        setIsSuccess(false)
        btnDom.disabled = false
      }
    }, 1000)
  }

  /* 点击鼠标获取验证码 */
  const getCode = async (event) => {
    console.log('等待30s再获取验证码---提示验证码获取成功')
    /* 成功：等待30s再获取验证码---30s后启用按钮---失败，等待30s之后再重新由用户尝试 */
    countDownFun(countDown, setCountDown, setIsSuccess, event.target)

    try {
      const codeData = await reqRegisterCode(email)
      if (codeData.code === 200) {
        console.log('获取验证码成功')
        console.log('30s之后再次获取')
      } else {
        console.log('验证码获取失败，30s之后再次获取')
      }
    } catch (e) {
      console.log('验证码获取失败', e)
    }
  }

  /* 拿着验证码和邮箱登录 */
  const submit = useSubmit()
  const login = async () => {
    if (code && email) {
      try {
        const loginData = await reqRequestLogin({ email, code })
        /* 隐藏当前组件，渲染头像用户名，存储token */
        if (loginData.code === 200) {
          console.log(loginData, '登陆成功隐藏当前组件，渲染头像用户名，存储token')
          noDisplay()
          /* 渲染用户名和头像---修改全局的userinfo context */
          // setUserInfo({ ...userInfo, ...loginData.data })
          /* 修改本地存储的token */
          setToken(loginData.data.token)
          submit({
            type: 'login'
          }, {
            method: 'post',
            action: '/'
          })
        } else {
          alert('请重新登录')
        }
      } catch (e) {
        console.log(e)
      }
    }
  }

  /* 订阅是否显示当前组件的消息 */
  useEffect(() => {
    PubSub.subscribe('displayLoginRegister', (msg, data) => {
      if (data) {
        display()
      }
    })
  })
  return (
    <div
      className='LoginRegister__div--flex'
      style={{
        display: isDisplay ? 'flex' : 'none'
      }}
    >
      <div className='LoginRegister__div--containerpadding'>
        <div className='LoginRegister__div--titleflex'>
          <div>登录黑金畅享更多权益</div>
          <button
            className='LoginRegister__button--quit'
            onClick={noDisplay}
          >X</button>
        </div>
        {/* 用router那里教的Form */}
        <Form className='LoginRegister__form--flex' onSubmit={login}>
          <span>邮箱登录</span>
          <input
            type="email"
            name='email'
            className='LoginRegister__ipt--email'
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <div>
            <input
              type="number"
              name='code'
              className='LoginRegister__ipt--email LoginRegister__ipt--codewidth'
              onChange={(event) => {
                setCode(event.target.value)
              }}
            />
            <button
              type='submit'
              /* 是否添加禁用样式 */
              className={
                'LoginRegister__button--bgc ' + (isSuccess ? 'LoginRegister__button--bgcactive' : '')
              }
              onClick={getCode}
            >
              {isSuccess ? `${countDown}之后再获取` : '获取验证码'}
            </button>
            <span
              className={
                'LoginRegister__span--display ' + (isSuccess ? 'LoginRegister__span--active' : '')
              }
            >
              获取成功
            </span>
          </div>
          <button
            type="submit"
            className='LoginRegister__submit--bgc'
          >登录</button>
        </Form>
        <div>注册登录即表示同意 用户协议 和 隐私政策</div>
      </div>
    </div>
  )
}
