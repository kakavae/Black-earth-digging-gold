import React from 'react'
import './index.css'
import AsideMember from './asideMember'
import AsideAdvertisement from './asideAdvertisement'
import AsideDownload from './asideDownload'
import AsideProducts from './asideProducts'
import AsideBottom from './asideBottom'
import { useState } from 'react'
import { useRef, useEffect } from 'react'

export default function Aside() {
  /* 改变想法，直接放一个新的广告组件在下面 */
  const [isShow, setIsShow] = useState(false)
  /* 绑定div组件，上面的所有盒子 */
  const aside = useRef()
  /* 观察整个aside下的第一个div，如果div消失了，就将广告组件固定定位并且添加过渡动画 */
  const changeAside = (entries) => {
    const ratio = entries[0].intersectionRatio
    if (ratio > 0) {
      setIsShow(false)
    } else {
      setIsShow(true)
    }
    // 如果比率从0变为1就正常显示
    // 如果比率从大于0变为小于0就固定定位广告模块
  }
  const IO = new IntersectionObserver(changeAside)
  useEffect(() => {
    IO.observe(aside.current)
  })

  return (
    <aside>
      <div ref={aside}>
        <AsideMember></AsideMember>
        {/* 广告 */}
        <AsideAdvertisement></AsideAdvertisement>
        {/* 下载黑土掘金 */}
        <AsideDownload></AsideDownload>
        {/* 微博等相关产品 */}
        <AsideProducts></AsideProducts>
        {/* 侧边栏底部模块 */}
        <AsideBottom isShow={isShow}></AsideBottom>
      </div>
      <div
        className={'aside__div--fixadvertisement ' + (isShow ? 'aside__div--fixadvertisementactive' : '')}
      >
        <AsideAdvertisement></AsideAdvertisement>
        <AsideDownload></AsideDownload>
      </div>
    </aside>
  )
}
