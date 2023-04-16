import React from 'react'
import './index.css'
import { useState } from 'react'
import HeaderCreatorDetail from '../../headerCreatorDetail'
import useNotifacationList from '../../../../useHooks/headerImgMemberNotifacation'

export default function HeaderCreator() {
  // 控制创作者中心经过的背景颜色类----CSS就能解决
  const [creatorActiveBgc, setCreatorActiveBgc] = useState('')
  // 控制右侧的下拉框是否显示以及下拉的背景颜色 控制箭头的背景色以及旋转
  const [creatorActiveRight, setCreatorActiveRight] = useState('')

  // 修改创作者中心的背景颜色
  const changeCreatorBgc = (flag) => {
    return () => {
      if (flag) {
        setCreatorActiveBgc('headercreator__addgroup--active')
      } else {
        setCreatorActiveBgc('')
      }
    }
  }
  // 修改箭头以及显示下方隐藏起来的元素
  const changeArrow = (flag) => {
    return () => {
      if (flag) {
        setCreatorActiveRight('headercreator__addgroup--rightactive')
        display()
      } else {
        setCreatorActiveRight('')
        noDisplay()
      }
    }
  }

  /* 鼠标经过上方的箭头，显示和隐藏下方的创作者中心细节 */
  const { isDisplay, display, noDisplay } = useNotifacationList()

  return (
    <div
      className="headercreator__addgroup"
    >
      <button
        onMouseOver={changeCreatorBgc(true)}
        onMouseOut={changeCreatorBgc(false)}
        className={creatorActiveBgc}
      >创作者中心</button>
      <div
        className={'headercreator__div--more ' + creatorActiveRight}
        onMouseOver={changeArrow(true)}
        onMouseOut={changeArrow(false)}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="unfold12-icon" data-v-9fa8ab8e=""><path d="M2.45025 4.82383C2.17422 4.49908 2.40501 4 2.83122 4H9.16878C9.59499 4 9.82578 4.49908 9.54975 4.82382L6.38097 8.5518C6.1813 8.7867 5.8187 8.7867 5.61903 8.5518L2.45025 4.82383Z" fill="white"></path></svg>
        <HeaderCreatorDetail isDisplay={isDisplay}></HeaderCreatorDetail>
      </div>
    </div>
  )
}
