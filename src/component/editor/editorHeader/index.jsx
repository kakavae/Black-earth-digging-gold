import React from 'react'
import './index.css'

export default function EditorHeader({ title, setTitle, publish }) {
  return (
    <div className='editorheader__div--titleflex'>
      <div className='editorheader__div--flexgrow'>
        <input
          className='editorheader__ipt--font'
          value={title}
          onChange={(event) => {
            setTitle(event.target.value)
          }}
          placeholder='输入文章标题' />
      </div>

      <div className='editorheader__div--leftwidth'>
        <button className='editorheader__btn--font'>草稿箱</button>
        <button
          onClick={publish}
          className='editorheader__btn--bgc'
        >发布</button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.7998 9.6001L19.1998 9.6001L15.1998 5.6001" stroke="#86909C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.1997 14.3999L4.79971 14.3999L8.79971 18.3999" stroke="#86909C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        <img src="https://p3-passport.byteimg.com/img/mosaic-legacy/3793/3131589739~180x180.awebp" alt="头像" />
      </div>
    </div>
  )
}
