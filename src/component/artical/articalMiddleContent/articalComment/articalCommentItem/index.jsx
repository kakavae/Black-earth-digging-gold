import React from 'react'
import './index.css'

export default function ArticalCommentItem({ comment }) {
  const [userName, commentContent] = Object.entries(comment)[0]
  return (
    <div className='articalcommentitem__div--commentcontainer'>
      <div className='articalcommentitem__div--user'><a href="/">{userName}</a></div>
      <div className='articalcommentitem__div--content'>{commentContent}</div>
    </div>
  )
}
