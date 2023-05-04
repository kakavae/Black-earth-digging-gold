import React from 'react'
import './index.css'
import useNotifacationList from '../../../../useHooks/headerImgMemberNotifacation'
import { useContext } from 'react'
import { isDisplayContext } from '../../../../context/app'
import IndividualCenter from './individualCenter'
import useMenu from '../../../../useHooks/headerMenuDown'

export default function HeaderImgMember() {
  const selectList = [
    { id: 1, title: '评论', url: '/' },
    { id: 2, title: '赞和收藏', url: '/' },
    { id: 3, title: '新增粉丝', url: '/' },
    { id: 4, title: '私信', url: '/' },
    { id: 5, title: '系统通知', url: '/' },
  ]

  /* 是否显示通知栏目下拉菜单 */
  const { isDisplay, display, noDisplay } = useNotifacationList()

  /* s是否显示组件自身 */
  /* 当app组件在loader之后获取的userInfo是空的时候，这个组件就不会被渲染 */
  const { userInfo } = useContext(isDisplayContext)

  /* 点击头像之后是否显示个人中心的下拉框 --- 点击其他地方下拉主页消失 */
  const { isDisplay: isDisplayIndividualMenu, changeDisplay, menu } = useMenu()
  // const { isDisplay: isDisplayIndividualCenter,
  //   display: displayIndividualCenter,
  //   noDisplay: noDisplayIndividualCenter } = useNotifacationList()

  // const displayIndividualCenterOrNot = () => {
  //   if (isDisplayIndividualCenter) {
  //     noDisplayIndividualCenter()
  //   } else {
  //     displayIndividualCenter()
  //   }
  // }
  return (
    <>
      {/* 通知区域 */}
      {/* 鼠标经过的时候显示ul，display改为flex */}
      <li
        className="headerimgmembernotification__li--notification"
        onMouseEnter={display}
        onMouseLeave={noDisplay}
        style={{
          display: userInfo.id ? 'block' : 'none'
        }}
      >
        <div className='headerimgmembernotification__div--svgflex'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="notification-icon" data-v-25e3b163=""><path d="M6.01132 10.2856C6.28115 6.54234 8.68619 4.28564 11.9999 4.28564C15.3136 4.28564 17.7186 6.54234 17.9885 10.2856C18.1219 12.1363 18.4093 13.708 19.9473 15.8848C20.1889 16.2267 19.953 16.7142 19.5343 16.7142H4.46546C4.04679 16.7142 3.81092 16.2267 4.05252 15.8848C5.59053 13.708 5.87793 12.1363 6.01132 10.2856Z" strokeWidth="1.5" strokeLinecap="round"></path><path d="M11.9573 3.21436V4.28578" strokeWidth="3" strokeLinecap="round" data-v-25e3b163=""></path><path d="M9.57495 18.8569C9.92795 19.8557 10.8804 20.5712 12.0001 20.5712C13.1197 20.5712 14.0722 19.8557 14.4252 18.8569H9.57495Z" strokeLinecap="round" strokeLinejoin="round" data-v-25e3b163=""></path></svg>
          <span>&nbsp;3&nbsp;</span>
        </div>
        {/* 下方的固定定位 */}
        <ul
          className='headerimgmembernotification__div--notificationdetail'
          style={{
            display: isDisplay ? 'flex' : 'none'
          }}
        >
          {selectList.map((item) => {
            return <li key={item.id}>
              <a href={item.url}
                className='headerimgmembernotification__a--notificationdetail'>
                {item.title}
              </a>
            </li>
          })}
        </ul>
      </li>
      {/* 头像区域 */}
      <li
        className="headerimgmembernotification__li--headerimg"
        style={{
          display: userInfo.id ? 'block' : 'none'
        }}
      >
        <div
          className="headerimgmembernotification__div--headerimg"
          ref={menu}
        >
          <img
            onClick={changeDisplay}
            src={userInfo.imgUrl ? userInfo.imgUrl : 'https://p3-passport.byteimg.com/img/user-avatar/9d6fb3cc6b313cc6aff6a2fa7da8ff65~100x100.awebp'} alt="头像" />
          <IndividualCenter
            // isDisplayIndividualCenter={isDisplayIndividualCenter}
            // noDisplayIndividualCenter={noDisplayIndividualCenter}
            isDisplayIndividualMenu={isDisplayIndividualMenu}
            changeDisplay={changeDisplay}
          ></IndividualCenter>
        </div>
      </li>
    </>
  )
}
