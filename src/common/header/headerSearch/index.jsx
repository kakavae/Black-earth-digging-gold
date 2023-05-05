import React, { useRef, useContext } from 'react'
import './index.css'
import { useState } from 'react'
import HeaderCreator from './headerCreator'
import { reqSearchArticalList } from '../../../api'
import { Form } from 'react-router-dom'
import { isDisplayContext } from '../../../context/app'
import { default as processData } from '../../../useHooks/recommondUpdate'

export default function HeaderSearch() {
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
  // input的受控组件
  const [iptValue, setIptValue] = useState('')

  // 放大镜DOM记录，排除在失去焦点改变样式之外
  const glass = useRef()

  /* home的文章列表 */
  const { setArticalListPlus } = useContext(isDisplayContext)

  // 搜索内容focus之后改变两个样式
  const inputFocus = () => {
    setIptPlaceholder('搜索文章/小册/标签/用户')
    setPathActiveClass('search-icon-path--active')
    setPathBgActiveClass('headersearch__div--searchactive')
    setFormActive('headersearch__form--active')
    /* 通知子组件HeaderCreator修改自己的样式 */
    setCreatorActive('headersearch__li--creatoractive')
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
  const inputSearch = async () => {
    try {
      const queryRes = await reqSearchArticalList(iptValue)
      console.log('获取到搜索结果，展示搜索列表，input失去焦点，路由切换', queryRes)
      if (queryRes.code === 200) {
        return queryRes.data
      } else {
        return []
      }
    } catch (e) {
      console.log(e)
    }
  }

  /* 按下enter键，触发搜索事件 */
  const getIptRes = async (event) => {
    if (event.code === 'Enter') {
      const articaList = await inputSearch()
      /* 搜索到的结果添加到页面当中 */
      setArticalListPlus([...processData(articaList)])
    }
  }

  return (
    <ul className='headersearch__ul__ul--container'>
      <li className="headersearch__li--formFlex">
        <Form
          onSubmit={(event) => {
            event.preventDefault()
          }}
          className={'headersearch__form ' + formActive}>
          <input
            type="text"
            placeholder={iptPlaceholder}
            value={iptValue}
            onChange={(event) => { setIptValue(event.target.value) }}
            onFocus={inputFocus}
            onBlur={inputBlur}
            onKeyUp={getIptRes}
          />
          <div
            ref={glass}
            className={'headersearch__div--container--search ' + pathBgActiveClass}
            onClick={inputSearch}
            onMouseDown={(event) => { event.preventDefault() }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
              <path d="M12.4008 12.4008C14.744 10.0577 14.744 6.25871 12.4008 3.91556C10.0577 1.57242 6.25871 1.57242 3.91556 3.91556C1.57242 6.25871 1.57242 10.0577 3.91556 12.4008C6.25871 14.744 10.0577 14.744 12.4008 12.4008ZM12.4008 12.4008L15.5828 15.5828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                className={pathActiveClass}
              ></path>
            </svg>
          </div>
        </Form>
      </li>
      <li className={'headersearch__li--creator ' + creatorActive}>
        <HeaderCreator></HeaderCreator>
      </li>
    </ul>
  )
}
