import React from 'react'
import { NavLink, useHref } from 'react-router-dom'
import useMenuList from '../../../useHooks/navLeft'

export default function NavLeftRecommendation({ recommendationCircle = [] }) {
  /* 鼠标移动和点击后修改列表的样式--- */
  const { acticeId, focuseId, changeActive, turnMenu } = useMenuList(recommendationCircle, Symbol())

  return (
    <ul onMouseOut={changeActive(-1)}>
      {recommendationCircle.map((item) => {
        return <li key={item.id}>
          <NavLink
            to={item.url}
            className={'NavLeft__a--height ' + (acticeId === item.id ? 'NavLeft__a--active' : '') + ' ' + (focuseId === item.id ? 'NavLeft__a--bgcactive' : '')}
            onMouseOver={changeActive(item.id)}
            onClick={turnMenu(item.id)}
          >
            <svg className={acticeId === item.id ? 'NavLeft--active' : ''} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4d63e546="" ><path fillRule="evenodd" clipRule="evenodd" d={item.dContent} fill="currentColor" data-v-4d63e546=""></path></svg>
            <span className='NavLeft__span'>{item.title}
            </span>
          </NavLink>
        </li>
      })}
    </ul>
  )
}
