import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
/* 左边的每一个下拉菜单封装为一个组件 */
import CreatorLeftDown from './creatorLeftDown'

export default function CreatorLeft() {
  const staticList = [
    {
      title: '内容管理',
      contentList: [
        { id: 1, title: '文章管理' },
        { id: 2, title: '专栏管理' },
        { id: 3, title: '沸点管理' },
      ]
    },
    {
      title: '数据中心',
      contentList: [
        { id: 1, title: '文章管理' },
        { id: 2, title: '专栏管理' },
        { id: 3, title: '沸点管理' },
      ]
    },
    {
      title: '创作成长',
      contentList: [
        { id: 1, title: '文章管理' },
        { id: 2, title: '专栏管理' },
        { id: 3, title: '沸点管理' },
      ]
    },
    {
      title: '创作工具',
      contentList: [
        { id: 1, title: '文章管理' },
        { id: 2, title: '专栏管理' },
        { id: 3, title: '沸点管理' },
      ]
    },
    {
      title: '帮助中心',
      contentList: [
        { id: 1, title: '文章管理' },
        { id: 2, title: '专栏管理' },
        { id: 3, title: '沸点管理' },
      ]
    }
  ]
  return (
    <div className='creatorLeft__div--containerbgc'>
      <Link
        to={'/editor'}
        className='creatorLeft__a--bgc'
      >写文章</Link>
      <div className='creatorLeft__ul--overflowauto'>
        <div className='creatorLeftDown__div--flex'>首页</div>
        {staticList.map((item, index) => {
          return <CreatorLeftDown key={index} title={item.title} contentList={item.contentList}></CreatorLeftDown>
        })}
      </div>
    </div>
  )
}
