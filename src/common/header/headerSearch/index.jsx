import React from 'react'
import './index.css'
import { useState } from 'react'
import HeaderCreator from './headerCreator'

export default function HeaderSearch({ setRight }) {
  // 修改input的placeholde
  const [iptPlaceholder, setIptPlaceholder] = useState('探索黑土掘金')
  // 控制input活跃之后放大镜的样式
  const [pathActiveClass, setPathActiveClass] = useState('')
  // 控制input活跃之后放大镜后的背景样式
  const [pathBgActiveClass, setPathBgActiveClass] = useState('')
  // 控制form表单活跃的样式
  const [formActive, setFormActive] = useState('')
  // 控制活跃的时候不显示创作者中心
  const [creatorActive, setCreatorActive] = useState('')

  // 搜索内容focus之后改变两个样式
  const inputFocus = () => {
    setIptPlaceholder('搜索文章/小册/标签/用户')
    setPathActiveClass('search-icon-path--active')
    setPathBgActiveClass('header__div--searchactive')
    setFormActive('header__form--active')
    /* 通知子组件HeaderCreator修改自己的样式 */
    setCreatorActive('header__li--creatoractive')
  }
  const inputBlur = (event) => {
    setIptPlaceholder('探索黑土掘金')
    setPathActiveClass('')
    setPathBgActiveClass('')
    setFormActive('')
    /* 通知子组件HeaderCreator修改自己的样式 */
    setCreatorActive('')
  }
  // 获取搜索内容，发送搜索信息
  const inputSearch = (event) => {
    console.log(event)
  }

  return (
    <ul className='header__ul__ul--container'>
      <li className="header__li--formFlex">
        <form className={'header__form ' + formActive}>
          <input
            type="text"
            placeholder={iptPlaceholder}
            onFocus={inputFocus}
            onBlur={inputBlur}
          />
          <div className={'header__div--container--search ' + pathBgActiveClass}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
              <path d="M12.4008 12.4008C14.744 10.0577 14.744 6.25871 12.4008 3.91556C10.0577 1.57242 6.25871 1.57242 3.91556 3.91556C1.57242 6.25871 1.57242 10.0577 3.91556 12.4008C6.25871 14.744 10.0577 14.744 12.4008 12.4008ZM12.4008 12.4008L15.5828 15.5828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className={pathActiveClass}
              ></path>
            </svg>
          </div>
        </form>
      </li>
      <li className={'header__li--creator ' + creatorActive}>
        <HeaderCreator setRight={setRight}></HeaderCreator>
      </li>
    </ul>
  )
}
