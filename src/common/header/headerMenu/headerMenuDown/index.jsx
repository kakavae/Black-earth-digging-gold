import React, { useEffect, useRef } from 'react'
import './index.css'
import useMenu from '../../../../useHooks/headerMenuDown'

export default function HeaderMenuDown({ homeMenuList }) {
  const { isDisplay, changeDisplay, menu } = useMenu()

  return (
    <div
      className='headerMenuDown__div--container'
      ref={menu}
    >
      <div
        className='headerMenuDown__div--center'
        onClick={changeDisplay}
      ><span>首页</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
          className={isDisplay ? 'headerMenuDown__svg--centerarrowactive' : ''}
        >
          <path d="M2.45025 4.82431C2.17422 4.49957 2.40501 4.00049 2.83122 4.00049H9.16878C9.59498 4.00049 9.82578 4.49957 9.54975 4.82431L6.38097 8.55229C6.1813 8.78719 5.8187 8.78719 5.61903 8.55229L2.45025 4.82431Z"
            className={isDisplay ? 'headerMenuDown__path--centerarrowactive' : ''}
          ></path></svg>
      </div>
      <ul
        className={'headerMenuDown__ul--absolute ' + (isDisplay ? 'headerMenuDown__ul--display' : '')}
      >
        {homeMenuList.map((item) => {
          return <li key={item.id}><a href="/">{item.title}</a></li>
        })}
      </ul>
    </div>
  )
}
