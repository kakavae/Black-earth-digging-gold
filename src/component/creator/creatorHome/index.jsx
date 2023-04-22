import React from 'react'
import './index.css'
import CreatorHomeHeader from './creatorHomeHeader'
import CreatorHomeDataCenter from './creatorHomeDataCenter'

export default function CreatorHome() {
  return (
    <div className='CreatorHome__div--containermargin'>
      <CreatorHomeHeader></CreatorHomeHeader>
      <CreatorHomeDataCenter></CreatorHomeDataCenter>
    </div>
  )
}
