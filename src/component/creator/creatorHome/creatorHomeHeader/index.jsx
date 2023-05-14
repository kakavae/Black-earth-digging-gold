import React, { useContext } from 'react'
import './index.css'
import { isDisplayContext } from '../../../../context/app'

export default function CreatorHomeHeader() {
  const { userInfo } = useContext(isDisplayContext)

  return (
    <div className='creatorhomeheader__div--headerflex'>
      <img src="https://p3-passport.byteimg.com/img/mosaic-legacy/3793/3131589739~180x180.awebp" alt="" />
      <div>
        <h3>{userInfo.userName}</h3>
        <div>          0 粉丝
          0 关注
          0 掘力值
          在掘金创作的第 0 天</div>
      </div>
    </div>
  )
}
