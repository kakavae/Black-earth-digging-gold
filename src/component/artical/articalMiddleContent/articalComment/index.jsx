import React, { useState } from 'react'
import './index.css'
import ArticalCommentItem from './articalCommentItem'
import { sendComment as sendCommentMsg, likeArtical } from '../../../../api'
import { useSubmit } from 'react-router-dom'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const commentData = Object.fromEntries(formData)

  /* 如果传来的是likes的action */
  if (commentData.type === 'like') {
    try {
      const resData = await likeArtical(commentData.id)
      console.log(resData)
      if (resData.code === 200) {
        return resData
      }
      return resData
    } catch (e) {
      console.log(e)
    }
  }

  /* 如果传来的是comment的action */
  try {
    const resData = await sendCommentMsg(commentData)
    console.log('@', resData)
    return resData
  } catch (e) {
    console.log(e)
  }
  return null
}

export default function ArticalComment({ id, commentsList }) {

  commentsList = commentsList.filter((item) => {
    return Object.keys(item).length > 0
  })

  const [commentContent, setCommentContent] = useState('')

  const submit = useSubmit()

  const sendComment = async () => {
    console.log(commentContent)
    submit({
      id,
      comment: commentContent
    }, {
      method: 'post',
      action: 'post/' + id
    })

  }
  return (
    <div className='articalcomment__div--containerbgc'>
      <div>
        <h3>评论</h3>
        <div>
          <div className='articalcomment__div--iptflex'>
            <img className='articalcomment__img--header' src="https://p3-passport.byteimg.com/img/mosaic-legacy/3793/3131589739~100x100.awebp" alt="" />
            <textarea type="text" placeholder='输入评论' onChange={(event) => {
              setCommentContent(event.target.value)
            }} />
          </div>
          <div className='articalcomment__div--publishcomment'>
            <span>Crtl+Enter</span>
            <button onClick={sendComment}>发表评论</button>
          </div>
        </div>
      </div>
      <div>
        {commentsList.length > 0 ? <>
          <h3>热门评论</h3>
          <div>
            {commentsList.map((item, index) => {
              return <ArticalCommentItem key={index} comment={item}></ArticalCommentItem>
            })}
          </div>
        </> : <></>}

      </div>
    </div>
  )
}
