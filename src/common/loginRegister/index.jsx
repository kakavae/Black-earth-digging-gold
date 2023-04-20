import React, { useState, useEffect, useContext } from 'react'
import './index.css'
import useNotifacationList from '../../useHooks/headerImgMemberNotifacation'
import PubSub from 'pubsub-js'
import { reqRegisterCode, reqRequestLogin } from '../../api'
import { Form } from 'react-router-dom'
import { isDisplayContext } from '../../context/app'
import { setToken } from '../../useFunction/token'

export default function LoginRegister() {
  /* 接收父级组件传递的用户信息，或者修改这个信息 */
  const { userInfo, setUserInfo } = useContext(isDisplayContext)

  /* 是否显示当前组件 */
  const { isDisplay, display, noDisplay } = useNotifacationList()

  /* 保存邮箱数据 */
  const [email, setEmail] = useState('')
  /* 保存验证码数据 */
  const [code, setCode] = useState('')

  /* 点击鼠标获取验证码 */
  const getCode = async (event) => {
    try {
      const codeData = await reqRegisterCode(email)
      console.log(123)
      console.log(codeData)
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
  const login = async () => {
    /* 规则校验 */
    if (code && email) {
      try {
        const loginData = await reqRequestLogin({ email, code })
        /* 隐藏当前组件，渲染头像用户名，存储token */
        if (loginData.code === 200) {
          console.log(loginData, '登陆成功隐藏当前组件，渲染头像用户名，存储token')
          noDisplay()
          /* 渲染用户名和头像---修改全局的userinfo context */
          setUserInfo({ ...userInfo, ...loginData.data })
          /* 修改本地存储的token */
          setToken(loginData.data.token)
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
            className='LoginRegister__ipt--email'
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <div>
            <input
              type="number"
              className='LoginRegister__ipt--email LoginRegister__ipt--codewidth'
              onChange={(event) => {
                setCode(event.target.value)
              }}
            />
            <button
              type='submit'
              className='LoginRegister__button--bgc'
              onClick={getCode}
            >获取验证码</button>
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
