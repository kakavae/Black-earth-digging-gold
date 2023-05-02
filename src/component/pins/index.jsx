import React, { useState } from 'react'
// import { useRoutes } from 'react-router-dom'
import './index.css'
import NavLeft from '../../common/navLeft'
import Aside from '../../common/aside'
import { getPinsList } from '../../api'
/* 分为上下两个组件 */
import PinsPubComment from './pinsPubComment'
import { proPinsList } from '../../useFunction/processData/processPins'
import { Outlet, useLoaderData } from 'react-router-dom'
import { pinsContext } from '../../context/pins'

export const loader = async () => {
  try {
    const resData = await getPinsList()
    if (resData.code === 200) {
      return proPinsList(resData.data.selData)
    } else {
      console.log('pins获取失败，loader返回[]')
      return []
    }
  } catch (e) {
    console.log(e)
  }
  return []
}

export default function Pins() {
  /* 左侧导航NavLeft需要显示的数据 */
  const menuList = [
    { id: 1, title: '最新', url: '/pins/new', dContent: 'M12.7568 1.3335C13.4239 1.3335 13.9641 1.86183 13.9983 2.52111L14 2.58746V6.34783V9.44263L13.7881 9.41059C13.6565 9.39071 13.5435 9.30673 13.4865 9.18654L11.8614 5.76125C11.7168 5.45652 11.2832 5.45652 11.1386 5.76125L9.51354 9.18654C9.45652 9.30673 9.34347 9.39071 9.21193 9.41059L5.77633 9.92991C5.45315 9.97876 5.32181 10.3736 5.55131 10.6063L8.04943 13.1394C8.13927 13.2305 8.18011 13.3591 8.1593 13.4853L7.90953 15.0002H5.42606H3.24324C2.57608 15.0002 2.03587 14.4718 2.00171 13.8125L2 13.7462V2.58746C2 1.91989 2.51869 1.37002 3.17696 1.33524L3.24324 1.3335H12.7568ZM7.33333 7.00017C7.33333 6.81608 7.18409 6.66684 7 6.66684H5C4.8159 6.66684 4.66666 6.81608 4.66666 7.00017V7.66684C4.66666 7.85093 4.8159 8.00017 5 8.00017H7C7.18409 8.00017 7.33333 7.85093 7.33333 7.66684V7.00017ZM9.66666 4.00017C9.85076 4.00017 10 4.14941 10 4.3335V5.00017C10 5.18426 9.85076 5.3335 9.66666 5.3335H5C4.8159 5.3335 4.66666 5.18426 4.66666 5.00017V4.3335C4.66666 4.14941 4.8159 4.00017 5 4.00017H9.66666Z' },
    { id: 2, title: '热门', url: '/pins/hot', dContent: 'M0.666016 8.00033C0.666016 12.0504 3.94926 15.3337 7.99935 15.3337C12.0494 15.3337 15.3327 12.0504 15.3327 8.00033C15.3327 3.95024 12.0494 0.666992 7.99935 0.666992C3.94926 0.666992 0.666016 3.95024 0.666016 8.00033ZM5.43709 11.0048L9.3392 9.34286L11.0037 5.43876C11.0397 5.35428 11.0393 5.25869 11.0025 5.17455C10.9288 5.00586 10.7323 4.92887 10.5636 5.00259L6.68535 6.69744L5.00087 10.565C4.96428 10.649 4.96389 10.7444 4.9998 10.8287C5.07193 10.9981 5.26772 11.0769 5.43709 11.0048Z' },
    { id: 3, title: '关注', url: '/pins/following', dContent: 'M2 2C1.44772 2 1 2.44772 1 3V11C1 11.5523 1.44772 12 2 12H14C14.5523 12 15 11.5523 15 11V3C15 2.44772 14.5523 2 14 2H2ZM4.5 7C4.22386 7 4 7.22386 4 7.5V9.5C4 9.77614 4.22386 10 4.5 10H5C5.27614 10 5.5 9.77614 5.5 9.5V7.5C5.5 7.22386 5.27614 7 5 7H4.5ZM7 5C7 4.72386 7.22386 4.5 7.5 4.5H8C8.27614 4.5 8.5 4.72386 8.5 5V9.5C8.5 9.77614 8.27614 10 8 10H7.5C7.22386 10 7 9.77614 7 9.5V5ZM10.5 6C10.2239 6 10 6.22386 10 6.5V9.5C10 9.77614 10.2239 10 10.5 10H11C11.2761 10 11.5 9.77614 11.5 9.5V6.5C11.5 6.22386 11.2761 6 11 6H10.5Z' },
    { id: 4, title: '我的圈子', url: '/pins/myclub', dContent: 'M2 2C1.44772 2 1 2.44772 1 3V6H15V3C15 2.44772 14.5523 2 14 2H2ZM15 7.3H1V13C1 13.5523 1.44772 14 2 14H14C14.5523 14 15 13.5523 15 13V7.3ZM8.65811 8.02566C8.92009 8.11298 9.06167 8.39614 8.97434 8.65811L7.97434 11.6581C7.88702 11.9201 7.60386 12.0617 7.34189 11.9743C7.07991 11.887 6.93833 11.6039 7.02566 11.3419L8.02566 8.34189C8.11298 8.07991 8.39614 7.93833 8.65811 8.02566ZM3.5 5C3.77614 5 4 4.77614 4 4.5C4 4.22386 3.77614 4 3.5 4C3.22386 4 3 4.22386 3 4.5C3 4.77614 3.22386 5 3.5 5ZM5.5 4.5C5.5 4.77614 5.27614 5 5 5C4.72386 5 4.5 4.77614 4.5 4.5C4.5 4.22386 4.72386 4 5 4C5.27614 4 5.5 4.22386 5.5 4.5ZM6.5 5C6.77614 5 7 4.77614 7 4.5C7 4.22386 6.77614 4 6.5 4C6.22386 4 6 4.22386 6 4.5C6 4.77614 6.22386 5 6.5 5ZM6.44721 8.77639C6.57071 9.02338 6.4706 9.32372 6.22361 9.44721L5.11803 10L6.22361 10.5528C6.4706 10.6763 6.57071 10.9766 6.44721 11.2236C6.32372 11.4706 6.02338 11.5707 5.77639 11.4472L3.77639 10.4472C3.607 10.3625 3.5 10.1894 3.5 10C3.5 9.81061 3.607 9.63748 3.77639 9.55279L5.77639 8.55279C6.02338 8.42929 6.32372 8.5294 6.44721 8.77639ZM9.77639 9.44721C9.5294 9.32372 9.42929 9.02338 9.55279 8.77639C9.67628 8.5294 9.97662 8.42929 10.2236 8.55279L12.2236 9.55279C12.393 9.63748 12.5 9.81061 12.5 10C12.5 10.1894 12.393 10.3625 12.2236 10.4472L10.2236 11.4472C9.97662 11.5707 9.67628 11.4706 9.55279 11.2236C9.42929 10.9766 9.5294 10.6763 9.77639 10.5528L10.882 10L9.77639 9.44721Z' },
    { id: 5, title: '推荐圈子', url: '/pins/club', dContent: 'M0.666016 8.00033C0.666016 12.0504 3.94926 15.3337 7.99935 15.3337C12.0494 15.3337 15.3327 12.0504 15.3327 8.00033C15.3327 3.95024 12.0494 0.666992 7.99935 0.666992C3.94926 0.666992 0.666016 3.95024 0.666016 8.00033ZM5.43709 11.0048L9.3392 9.34286L11.0037 5.43876C11.0397 5.35428 11.0393 5.25869 11.0025 5.17455C10.9288 5.00586 10.7323 4.92887 10.5636 5.00259L6.68535 6.69744L5.00087 10.565C4.96428 10.649 4.96389 10.7444 4.9998 10.8287C5.07193 10.9981 5.26772 11.0769 5.43709 11.0048Z' },
  ]
  /* 推荐圈子下面的数据 */
  const recommendationCircle = [
    { id: 1, title: '技术交流圈', url: '' },
    { id: 2, title: '今日新鲜事', url: '' },
    { id: 3, title: 'AI聊天室', url: '' },
    { id: 4, title: '树洞一下', url: '' },
    { id: 5, title: '上班摸鱼', url: '' },
    { id: 6, title: '更多', url: '' },
  ]

  const pinsList = useLoaderData()

  const [pinsListPlus, setPinsListPlus] = useState(pinsList)

  /* 评论区的数据 */
  const commentInfo = [
    {
      userId: 1,
      userName: '张三的歌',
      headerImgUrl: 'https://p3-passport.byteimg.com/img/user-avatar/0daadbcfcbeb871f3c075c37d21752de~100x100.awebp',
      commentUrl: '/',
      occupation: 'web开发',
      time: '17分钟前',
      contentInfo: {
        content: '理财，先投资自己，除了外在的物品，精神的需求，最重要的是健康的身体，好好调理，健康是最大的财富，没有健康，其他都是浮云~~拥有健康，才能积累更多的财富！！',
        club: '理财交流圈',
        likes: '17',
        commentTimes: '5',
        commentImg: [
          {
            id: 1,
            url: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/10c1ed6a8b72438c88ac8711905761c3~tplv-k3u1fbpfcp-zoom-mark-crop-v2:240:240:0:0.awebp?',
            alt: '键盘'
          },
          {
            id: 2,
            url: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05b159d50080480587adaa5c3112bdc8~tplv-k3u1fbpfcp-zoom-mark-crop-v2:240:240:0:0.awebp?',
            alt: 'chatGPT'
          }
        ]
      }
    },
    {
      userId: 2,
      userName: '张三的歌',
      headerImgUrl: 'https://p3-passport.byteimg.com/img/user-avatar/0daadbcfcbeb871f3c075c37d21752de~100x100.awebp',
      commentUrl: '/',
      occupation: 'web开发',
      time: '17分钟前',
      contentInfo: {
        content: '理财，先投资自己，除了外在的物品，精神的需求，最重要的是健康的身体，好好调理，健康是最大的财富，没有健康，其他都是浮云~~拥有健康，才能积累更多的财富！！',
        club: '理财交流圈',
        likes: '17',
        commentTimes: '5',
        commentImg: [
          {
            id: 1,
            url: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/10c1ed6a8b72438c88ac8711905761c3~tplv-k3u1fbpfcp-zoom-mark-crop-v2:240:240:0:0.awebp?',
            alt: '键盘'
          },
          {
            id: 2,
            url: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05b159d50080480587adaa5c3112bdc8~tplv-k3u1fbpfcp-zoom-mark-crop-v2:240:240:0:0.awebp?',
            alt: 'chatGPT'
          }
        ]
      }
    },
  ]

  return (
    /* 控制版心的盒子的位置 */
    <div className='pins__div--bgc'>
      <div className="pins__div--container">
        <div className="pins__div--view">
          {/* 左侧导航区 --中间是当前正在活跃的菜单id*/}
          <NavLeft menuList={menuList} inicalIndex={0} recommendationCircle={recommendationCircle}></NavLeft>
          {/* 中间模块 设置了flex: 1 */}
          <div className="pins__div--maincontent--w">
            <PinsPubComment setPinsListPlus={setPinsListPlus}></PinsPubComment>
            <pinsContext.Provider
              value={
                {
                  pinsListPlus
                }
              }>
              <Outlet></Outlet>
            </pinsContext.Provider>
          </div>
          {/* 右边的aside */}
          <Aside></Aside>
        </div>
      </div>
    </div>
  )
}
