import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

/* 导入context，接收App传下来的自己是否固定定位的数据 */
import { useContext } from 'react'
import { isDisplayContext } from '../../context/app'

/* 导入子组件 */
import NavLeftRecommendation from './navLeftRecommendation'

/* 导入hooks，负责修改列表状态和样式 */
import useMenuList from '../../useHooks/navLeft'

/* NavLeft接收数据从而复用当前的组件 */
export default function NavLeft({ menuList, recommendationCircle = [], inicalIndex = 1 }) {
  /* 鼠标移动和点击后修改列表的样式 */
  const { acticeId, focuseId, changeActive, turnMenu } = useMenuList(menuList, inicalIndex)

  /* 接收context数据--showheader的时候定位留出header位置，否则不留 */
  const { isDisplayHeader } = useContext(isDisplayContext)

  return (
    <div className='NavLeft__div--imgbox'>
      <div
        className="NavLeft__div--scroll"
        style={{ top: isDisplayHeader ? 'calc(60px + 1.66rem)' : '1.66rem' }}>
        <div className='NavLeft__div--container'>
          <ul onMouseOut={changeActive(-1)}>
            {menuList.map((item) => {
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
          {recommendationCircle.length > 0 ? <NavLeftRecommendation recommendationCircle={recommendationCircle}></NavLeftRecommendation> : []}
        </div>
      </div>
    </div>
  )
}
