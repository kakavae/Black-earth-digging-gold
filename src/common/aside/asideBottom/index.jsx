import React from 'react'
import './index.css'

export default function AsideBottom() {
  return (
    <div className='asidebottom__div--container'>
      <ul className='asidebottom__ul--flex'>
        <li><a href="/" className="asidebottom__a--color">用户协议</a></li>
        <li><a href="/" className="asidebottom__a--color">营业执照</a></li>
        <li><a href="/" className="asidebottom__a--color">隐私政策</a></li>
        <li><a href="/" className="asidebottom__a--color">关于我们</a></li>
        <li><a href="/" className="asidebottom__a--color">站点地图</a></li>
        <li><a href="/" className="asidebottom__a--color">使用指南</a></li>
        <li><a href="/" className="asidebottom__a--color">友情链接</a></li>
        <li><a href="/" className="asidebottom__a--color">更多文章</a></li>
      </ul>
      <ul className='asidebottom__ul--email'>
        <li>举报邮箱： feedback@xitu.io</li>
        <li>座机电话： 010-83xxxxx</li>
        <li>京ICP备1801xxx号-3©20xx 黑土掘金</li>
      </ul>


    </div>
  )
}
