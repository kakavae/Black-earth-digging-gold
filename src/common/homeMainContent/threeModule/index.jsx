import React from 'react'
import Recommond from './recommond'
import './index.css'

export default function ThreeModule({ isDisplay }) {
  return (
    <div
      className="threeModule__div--container"
      style={{
        display: (isDisplay ? 'flex' : 'none')
      }}
    >
      <Recommond></Recommond>
      <Recommond></Recommond>
      <Recommond></Recommond>
    </div>
  )
}
