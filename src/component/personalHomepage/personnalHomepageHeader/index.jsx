import React, { useContext } from 'react'
import './index.css'
import { isDisplayContext } from '../../../context/app'
import { Link } from 'react-router-dom'

export default function PersonalhomepageheaderHeader() {

  const { userInfo: { userName, email, imgUrl } } = useContext(isDisplayContext)

  return (
    <div className='personalhomepageheader__div--padding'>
      <div className='personalhomepageheader__div--headerimg'>
        <img src={imgUrl ? imgUrl : 'https://p3-passport.byteimg.com/img/mosaic-legacy/3793/3131589739~180x180.awebp'} alt="" />
        <div className='personalhomepageheader__div--flexgrow'>
          <h3>{userName}</h3>
          <div className='personalhomepageheader__div--editorflex'>
            <div>
              邮箱: {email}<br></br>
              掘友等级<br></br>
              你从事什么职业？<br></br>
            </div>
            <Link
              className='personalhomepageheader__btn--bgc'
              to='/user/settings/profile'
            >编辑个人资料</Link>
          </div>
        </div>
      </div>
      <div className='personalhomepageheader__div--bordertop'>
        获得徽章 0
      </div>
    </div>
  )
}
