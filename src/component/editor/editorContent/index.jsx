import React from 'react'
import './index.css'

export default function EditorContent({ content, setContent }) {
  return (
    <div>
      <div>一系列按钮</div>
      <div className='editorcontent__div--flex'>
        <div className='editorcontent__div--editor'>
          <textarea
            className=''
            type='text'
            placeholder='在这里输入文章内容'
            value={content}
            cols="50"
            rows="50"
            onChange={(event) => {
              setContent(event.target.value)
            }}
          />
        </div>
        <div className='editorcontent__div--show'>
          {content}
        </div>
      </div>
    </div>
  )
}
