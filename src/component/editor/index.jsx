import React, { useState } from 'react'
import './index.css'
import { useContext } from 'react'
import { isDisplayContext } from '../../context/app'
import { reqPublishArtical } from '../../api'
import EditorHeader from './editorHeader'
import EditorContent from './editorContent'
import 'bytemd/dist/index.css'
import { useNavigate } from 'react-router-dom'

/* 这个action到底怎么使用，解析？？？ */
export const action = async ({ request, params }) => {
  // console.log('action', data)
  // const formData = await request.formData();
  // console.log(Object.prototype.toString.call(formData))
  // console.log(Object.fromEntries(formData))
  return null
}

export default function Editor() {
  const { userInfo } = useContext(isDisplayContext)
  const navigate = useNavigate()

  /* 当前组件不显示header部分 */
  // useEffect(() => {
  //   setIsDisplayHeader(false)
  // })

  const [articalInfo, setArticalInfo] = useState({
    title: '',
    content: '',
    author: '',
    time: (new Date()).toLocaleString(),
    reading: 0,
    classification: ['后端 前端 js java'],
    lesscontent: '前端之路',
    imgUrl: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2c68eed94124e9faeaabc8602fd6c07~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
    imgalt: '前端',
    authorHeaderImg: 'https://p3-passport.byteimg.com/img/user-avatar/29691c255dda6a7de9a4e6fb6f5724eb~100x100.awebp',
    userId: ''
  })

  /* 发表文章 */
  /* 收集下级组件的所有文章相关信息，发表文章 */
  const publish = async () => {
    const { userName: author, id: userId, imgUrl } = userInfo
    /* 这里确保拿到用户名和id之后再上传信息 */
    const res = await reqPublishArtical({
      ...articalInfo,
      author,
      userId,
      imgUrl,
    })
    if (res.code === 200) {
      console.log('发表成功，跳转到个人中心已发表文章的界面', res)
      // redirect('/post/' + res.articalId)
      navigate('/post/' + res.articalId)
    } else {
      console.log('code!==200', res)
    }
  }

  return (
    <div className='editor__div--containermargintop'>
      <EditorHeader
        articalInfo={articalInfo}
        setArticalInfo={setArticalInfo}
        publish={publish}
      ></EditorHeader>
      <EditorContent
        setArticalInfo={setArticalInfo}
        articalInfo={articalInfo}
      ></EditorContent>
    </div>
  )
}
