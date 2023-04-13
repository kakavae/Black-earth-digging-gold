import React from 'react'
import './index.css'

export default function AsideProducts() {
  const productList = [
    {
      id: 1,
      title: '黑土掘金漫游指南',
      href: '/',
      imgUrl: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin.8ab20a7.png'
    },
    {
      id: 2,
      title: '黑金浏览器插件',
      href: '/',
      imgUrl: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/extension.ab1ba29.png'
    },
    {
      id: 3,
      title: '黑金翻译计划',
      href: '/',
      imgUrl: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/translation.ddbcec5.png'
    },
    {
      id: 4,
      title: '黑土官方微博',
      href: '/',
      imgUrl: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/weibo.67a1000.png'
    },
    {
      id: 5,
      title: '黑土微信公众号',
      href: '/',
      imgUrl: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/wechat.fb5c13a.png'
    },
  ]
  return (
    <div className='asideproducts__div--container'>
      {productList.map((item) => {
        return <a
          key={item.id}
          href={item.href}
          className="asideproducts__a--flexson">
          <img src={item.imgUrl} alt={item.title} className="asideproducts__img--width" />
          <span className="asideproducts__span--font">{item.title}</span>
        </a>
      })}
    </div>
  )
}
