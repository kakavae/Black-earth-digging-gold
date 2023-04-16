import React from 'react'
import './index.css'

export default function PinsCommentShare({ commentNum }) {
  return (
    <ul className='pinscommentshare__ul--bottomcontainer'>
      <li><a href="/" className='pinscommentshare__a--padding'><span className='pinscommentshare__span--bgishare'></span>分享</a></li>
      <li><a href="/" className='pinscommentshare__a--padding'><span className='pinscommentshare__span--bgicomment'></span>评论&nbsp;{commentNum}</a></li>
      <li><a href="/" className='pinscommentshare__a--padding'><span className='pinscommentshare__span--bgilike'></span>点赞</a></li>
    </ul>
  )
}
