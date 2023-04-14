import React from 'react'
import Header from './common/header'
import Home from './component/home'
import { useEffect, useState } from 'react'
import throttle from './useFunction/throttle'

export default function App() {

  const [isDisplayHeader, setIsDisplayHeader] = useState(true)

  /* 监听scroll事件，隐藏头部，还有更改右侧栏目中广告的位置 */
  /* 监听scroll事件---或者说，利用IntersectionObserver API，移动广告组件 */
  const throttleHidden = throttle(() => {
    if (window.scrollY >= 500) {
      setIsDisplayHeader(false)
    } else {
      setIsDisplayHeader(true)
    }
  }, 10)

  useEffect(() => {
    window.addEventListener('scroll', throttleHidden)
  }, [throttleHidden])

  return (
    <div>
      <Header isDisplayHeader={isDisplayHeader}></Header>
      <Home isDisplayHeader={isDisplayHeader}></Home>
    </div>
  )
}
