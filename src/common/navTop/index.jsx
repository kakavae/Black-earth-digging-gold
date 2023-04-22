import React, { useContext } from 'react'
import './index.css'
import { isDisplayContext } from '../../context/app'

export default function NavTop({ menuList }) {
  const { isDisplayHeader } = useContext(isDisplayContext)
  return (
    <div className={'NavTop__div--container' + (isDisplayHeader ? '' : ' NavTop__div--container-active')}>
      <ul className='NavTop__ul--container'>
        {menuList.map((item) => {
          return <li key={item.id}><a href="/">{item.title}</a></li>
        })}
      </ul>
      <a href="/" className='NavTop__a--display'>标签管理</a>
    </div>
  )
}
