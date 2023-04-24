import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function RecommondArtical({
  articalInfo = {
    author: '云墨',
    time: '1月前',
    classification: ['后端', '前端', 'js'],
    url: '/post/75489623',
    title: '资深前端的建议',
    content: '你是风格大家好，我是小王，小王在海边新开了一家排挡，海风夹杂着鱼腥味，每天傍晚时分从排挡门前吹过，排挡的木门摇摇欲坠',
    imgurl: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2c68eed94124e9faeaabc8602fd6c07~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
    imgalt: '作为前端应该了解的后端常识'
  } }) {
  const { author, time, classification, url, title, content, imgurl, imgalt } = articalInfo

  return (
    <div className='recommondArtical__div--container'>
      <div className='recommondArtical__div--line'>
        <div className='recommondArtical__div--articalmsg'>
          <div className="recommondArtical__div--author">
            <span className="recommondArtical__span--float recommondArtical__span--author">{author}</span>
            <span className="recommondArtical__span--float">{time}</span>
            <span className="recommondArtical__span--float">
              {classification.reduce((pre, cur) => {
                return pre + ' · ' + cur
              })}
            </span>
          </div>
          {/* 这个跳转如何控制打开新的页面标签，而不是覆盖原来的标签？？ */}
          <Link to={url}>
            <h3 className='recommondArtical__h3--title'>{title}</h3>
          </Link>
          <Link to={url} className='recommondArtical__a--ellipsis'>
            <p className='recommondArtical__p--artical'>{content}</p>
          </Link>
        </div>
        <img className='recommondArtical__img--artical' src={imgurl} alt={imgalt} />
      </div>
    </div>
  )
}
