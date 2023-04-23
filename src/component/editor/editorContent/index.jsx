import React, { useState } from 'react'
import './index.css'
import gfm from '@bytemd/plugin-gfm'
import { Editor, Viewer } from '@bytemd/react'

const plugins = [
  gfm(),
  // Add more plugins here
]

export default function EditorContent({ articalInfo, setArticalInfo }) {
  /*   return (
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
    ) */

  return (
    <>
      <Editor
        value={articalInfo.content}
        plugins={plugins}
        onChange={(v) => {
          setArticalInfo({ ...articalInfo, content: v })
        }}
      />
    </>
  )
}
