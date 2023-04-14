import React from 'react'
import './index.css'
import { useState, useEffect, useRef } from 'react'

export default function HeaderCreator({ setRight }) {
  // 控制创作者中心经过的背景颜色类
  const [creatorActiveBgc, setCreatorActiveBgc] = useState('')
  // 控制右侧的下拉框是否显示以及下拉的背景颜色 控制箭头的背景色以及旋转
  const [creatorActiveRight, setCreatorActiveRight] = useState('')

  /* 获取到创作者中心的ref，传递offsetRight给HeaderCreatorDetail组件使用 */
  const div = useRef()

  // 修改创作者中心的背景颜色
  const changeCreatorBgc = (flag) => {
    return () => {
      if (flag) {
        setCreatorActiveBgc('header__addgroup--active')
      } else {
        setCreatorActiveBgc('')
      }
    }
  }
  // 修改箭头以及显示下方隐藏起来的元素
  const changeArrow = (flag) => {
    return () => {
      if (flag) {
        setCreatorActiveRight('header__addgroup--rightactive')
      } else {
        setCreatorActiveRight('')
      }
    }
  }

  /* 给父组件传递此时创作者中心的位置 */
  useEffect(() => {
    // console.log(document.body.clientWidth, div.current.getBoundingClientRect().right)
    setRight(document.body.clientWidth - div.current.getBoundingClientRect().right)
  }, [setRight])

  return (
    <div
      className="header__addgroup"
      ref={div}
    >
      <button
        onMouseOver={changeCreatorBgc(true)}
        onMouseOut={changeCreatorBgc(false)}
        className={creatorActiveBgc}
      >创作者中心</button>
      <div
        className={'header__div--more ' + creatorActiveRight}
        onMouseOver={changeArrow(true)}
        onMouseOut={changeArrow(false)}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="unfold12-icon" data-v-9fa8ab8e=""><path d="M2.45025 4.82383C2.17422 4.49908 2.40501 4 2.83122 4H9.16878C9.59499 4 9.82578 4.49908 9.54975 4.82382L6.38097 8.5518C6.1813 8.7867 5.8187 8.7867 5.61903 8.5518L2.45025 4.82383Z" fill="white"></path></svg>
      </div>
    </div>
  )
}
