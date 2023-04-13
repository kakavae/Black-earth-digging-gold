import React from 'react'
import './index.css'
import { useState } from 'react'

export default function Header() {
  const ACTIVEMENULENGTH = 6
  // 菜单图
  const homeMenuList = [
    { id: 1, content: '首页' },
    { id: 2, content: '沸点' },
    { id: 3, content: '课程' },
    { id: 4, content: '直播' },
    { id: 5, content: '活动' },
    { id: 6, content: '竞赛' },
    { id: 7, content: '商城' },
    { id: 8, content: 'App' },
    { id: 9, content: '插件' },
  ]
  // 下划线的定位
  const [bottomLineLeft, setBottomLineLeft] = useState('0px')
  // 当前活跃的菜单
  const [activeMenuId, setActiveMenuId] = useState(homeMenuList[0].id)
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

  // 控制下划线显示
  const moveBootomLine = (event) => {
    const index = event.target.dataset.index
    if (index >= 0 && index <= 5) {
      // a和li的宽度一样，所以直接用a的
      setBottomLineLeft(index * event.target.offsetWidth + 'px')
    }
  }
  // 菜单跳转
  const changeMenu = (id) => {
    return (event) => {
      event.preventDefault()
      console.log(id, ACTIVEMENULENGTH)
      if (id <= ACTIVEMENULENGTH) {
        setActiveMenuId(id)
      }
    }
  }
  // 搜索内容focus之后改变两个样式
  const inputFocus = () => {
    setIptPlaceholder('搜索文章/小册/标签/用户')
    setPathActiveClass('search-icon-path--active')
    setPathBgActiveClass('header__div--searchactive')
    setFormActive('header__form--active')
    setCreatorActive('header__li--creatoractive')
  }
  const inputBlur = (event) => {
    setIptPlaceholder('探索黑土掘金')
    setPathActiveClass('')
    setPathBgActiveClass('')
    setFormActive('')
    setCreatorActive('')
  }
  // 获取搜索内容，发送搜索信息
  const inputSearch = (event) => {
    console.log(event)
  }
  return (
    <div className="header__header--container">
      <a href="/" className="header__a--logo">
        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="logo" />
      </a>
      <div>
        <ul className="header__ul--menubfc" onMouseOver={moveBootomLine}>
          {homeMenuList.map((item, index) => {
            return <li key={item.id}>
              <a
                href="/" className="header__ul__a--color"
                data-index={index}
                style={{ color: activeMenuId === item.id ? 'var(--juejin-brand-1-normal)' : 'var(--juejin-font-2)' }}
                onClick={changeMenu(item.id)}
              >{item.content}
              </a></li>
          })}
          <li className="header__li--bottomline" style={{ left: bottomLineLeft }}></li>
        </ul>
        <ul className="header__ul--rightcontentfloat">
          <li className="header__li--headerimg">
            <div className="header__div--headerimg">
              <img src="https://p3-passport.byteimg.com/img/mosaic-legacy/3793/3131589739~100x100.awebp" alt="" />
            </div>
          </li>
          <li className="header__li--notification">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="notification-icon" data-v-25e3b163=""><path d="M6.01132 10.2856C6.28115 6.54234 8.68619 4.28564 11.9999 4.28564C15.3136 4.28564 17.7186 6.54234 17.9885 10.2856C18.1219 12.1363 18.4093 13.708 19.9473 15.8848C20.1889 16.2267 19.953 16.7142 19.5343 16.7142H4.46546C4.04679 16.7142 3.81092 16.2267 4.05252 15.8848C5.59053 13.708 5.87793 12.1363 6.01132 10.2856Z" strokeWidth="1.5" strokeLinecap="round"></path><path d="M11.9573 3.21436V4.28578" strokeWidth="3" strokeLinecap="round" data-v-25e3b163=""></path><path d="M9.57495 18.8569C9.92795 19.8557 10.8804 20.5712 12.0001 20.5712C13.1197 20.5712 14.0722 19.8557 14.4252 18.8569H9.57495Z" strokeLinecap="round" strokeLinejoin="round" data-v-25e3b163=""></path></svg>
            <span>&nbsp;3&nbsp;</span>
          </li>
          <li className="header__li--member">
            <div className="vip--title">
              <div className="vip--img">
                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg" alt="" />
              </div>
              <div className="vip--words">会员</div>
            </div>
          </li>
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
              <div className="header__addgroup">
                <button>创作者中心</button>
                <div className="header__div--more">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="unfold12-icon" data-v-9fa8ab8e=""><path d="M2.45025 4.82383C2.17422 4.49908 2.40501 4 2.83122 4H9.16878C9.59499 4 9.82578 4.49908 9.54975 4.82382L6.38097 8.5518C6.1813 8.7867 5.8187 8.7867 5.61903 8.5518L2.45025 4.82383Z" fill="white" data-v-9fa8ab8e=""></path></svg>
                </div>
              </div>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  )
}
