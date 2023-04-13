import React from 'react'
import './index.css'

export default function AsideMember() {
  return (
    <div className='AsideMember__div--container'>
      <div>
        <h3 className='AsideMember__h3--title'>限时领取黑金会员</h3>
        <p className='AsideMember__p--light'>点亮在掘金的每一天</p>
      </div>
      <button className="asidemember__button">去签到</button>
    </div>
  )
}
