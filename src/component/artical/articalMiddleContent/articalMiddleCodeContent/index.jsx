import React from 'react'
import './index.css'
import { Viewer } from '@bytemd/react'

export default function ArticalMiddleCodeContent({ content }) {
  return (
    <div>
      <Viewer value={content}></Viewer>
    </div>
  )
}
