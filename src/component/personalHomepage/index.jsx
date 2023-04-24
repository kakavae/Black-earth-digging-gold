import React from 'react'
import './index.css'
import { reqUserArticalList } from '../../api'
import { useLoaderData } from 'react-router-dom'
import PersonalHomepageHeader from './personnalHomepageHeader'
import PersonalHomepagePublish from './personnalHomepagePublish'
import PersonnalHomepageFollow from './personnalHomepageFollow'

/* 写一个loader，跳转到当前页面的时候，就拿着用户的id去后台拿数据----好像拿着用户的email去拿数据更合理，这样用户在取消登录第二次登录用户名变了之后拿到的id就是不一样的，岂不是拿不到之前的信息了？ */
/* 好像数据库的设计里面userId也可以选？ */
export const loader = async ({ params }) => {
  const res = await reqUserArticalList(params.userId)
  if (res && res.code === 200) {
    return res.data
  } else {
    return [{}]
  }
}

export default function PersonalHomepage() {
  const articalList = useLoaderData()
  return (
    <div className='personalhomepage__div--bgc'>
      <div className='personalhomepage__div--margin'>
        <div className='personalhomepage__div--user'>
          {/* 左侧上部 */}
          <PersonalHomepageHeader></PersonalHomepageHeader>
          {/* 左侧下部 */}
          <PersonalHomepagePublish articalList={articalList}></PersonalHomepagePublish>
        </div>
        {/* 右侧的关注 */}
        <PersonnalHomepageFollow></PersonnalHomepageFollow>
      </div>
    </div>
  )
}
