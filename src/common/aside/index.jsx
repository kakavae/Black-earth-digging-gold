import React from 'react'
import './index.css'
import AsideMember from './asideMember'
import AsideAdvertisement from './asideAdvertisement'
import AsideDownload from './asideDownload'
import AsideProducts from './asideProducts'
import AsideBottom from './asideBottom'

export default function Aside() {
  return (
    <aside>
      <AsideMember></AsideMember>
      {/* 广告 */}
      <AsideAdvertisement></AsideAdvertisement>
      {/* 下载黑土掘金 */}
      <AsideDownload></AsideDownload>
      {/* 微博等相关产品 */}
      <AsideProducts></AsideProducts>
      {/* 侧边栏底部模块 */}
      <AsideBottom></AsideBottom>
    </aside>
  )
}
