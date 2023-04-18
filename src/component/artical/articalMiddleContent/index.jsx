import React from 'react'
import './index.css'
import ArticalMiddleCodeContent from './articalMiddleCodeContent'
export default function ArticleMiddleContent({ articalInfo: {
  title,
  author,
  time,
  reading,
  content
} }) {
  return (
    <article className="articlemiddlecontent__article--maincontent--w">
      <h1>{title}</h1>
      <div className='articlemiddlecontent__div--headerflex'>
        <img src="https://p3-passport.byteimg.com/img/user-avatar/29691c255dda6a7de9a4e6fb6f5724eb~100x100.awebp" alt="头像" />
        <div>
          <a href="/">{author}</a>
          <span>{time}&nbsp;·&nbsp;阅读&nbsp;{reading}</span>
        </div>
      </div>
      <ArticalMiddleCodeContent content={content}></ArticalMiddleCodeContent>
    </article>
  )
}
