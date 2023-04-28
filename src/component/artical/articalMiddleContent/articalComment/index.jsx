import React from 'react'
import './index.css'
import ArticalCommentItem from './articalCommentItem'

export default function ArticalComment({ commentsList }) {
  return (
    <div className='articalcomment__div--containerbgc'>
      <div>
        <h3>评论</h3>
        <div className='articalcomment__div--iptflex'>
          <img className='articalcomment__img--header' src="https://p3-passport.byteimg.com/img/mosaic-legacy/3793/3131589739~100x100.awebp" alt="" />
          <textarea type="text" placeholder='输入评论' />
        </div>
      </div>
      <div>
        <h3>热门评论</h3>
        <div>
          {commentsList.map((item, index) => {
            return <ArticalCommentItem key={index} comment={item}></ArticalCommentItem>
          })}
        </div>
      </div>
    </div>
  )
}
