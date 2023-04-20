import React, { useEffect, useState } from 'react'
import './index.css'
import { useContext } from 'react'
import { isDisplayContext } from '../../context/app'
import { reqPublishArtical } from '../../api'
import PubSub from 'pubsub-js'

export default function Editor() {
  const { setIsDisplayHeader, userInfo } = useContext(isDisplayContext)
  /* 当前组件不显示header部分 */
  useEffect(() => {
    setIsDisplayHeader(false)
  })

  /* 存储文章标题，存储文章体内容 */
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  /* 发表文章 */
  const publish = async () => {
    /* 作者名---用户名 */
    const { userName, id: userId } = userInfo
    const res = await reqPublishArtical({
      title,
      content,
      author: userName,
      time: (new Date()).toLocaleString(),
      reading: 0,
      classification: '后端 前端 js java',
      lesscontent: '前端之路',
      imgUrl: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2c68eed94124e9faeaabc8602fd6c07~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
      imgalt: '前端',
      authorHeaderImg: 'https://p3-passport.byteimg.com/img/user-avatar/29691c255dda6a7de9a4e6fb6f5724eb~100x100.awebp',
      userId
    })
    if (res.code === 200) {
      console.log('发表成功，跳转到个人中心已发表文章的界面', res)
    } else {
      console.log('code!==200', res)
    }
  }

  return (
    <div>
      <div>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value)
          }}
          placeholder='输入文章标题' />
        <button onClick={publish}>发布</button>
      </div>
      <div>
        <div>
          <textarea
            type='text'
            placeholder='在这里输入文章内容'
            value={content}
            onChange={(event) => {
              setContent(event.target.value)
            }}
          />
        </div>
        <div>同步显示区域</div>
      </div>
    </div>
  )
}
