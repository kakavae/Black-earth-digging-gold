import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function CreatorLeft() {
  return (
    <div>
      <Link to={'/editor'}>写文章</Link>
      <ul>
        <li><a href="/">首页</a></li>
        <li><a href="/">内容管理</a></li>
        <li><a href="/">数据中心</a></li>
        <li><a href="/">创作成长</a></li>
        <li><a href="/">创作工具</a></li>
        <li><a href="/">帮助中心</a></li>
      </ul>
    </div>
  )
}
