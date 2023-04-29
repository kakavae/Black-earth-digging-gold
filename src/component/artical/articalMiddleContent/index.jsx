import React from 'react'
import './index.css'
import ArticalMiddleCodeContent from './articalMiddleCodeContent'
import ArticalComment from './articalComment'
export default function ArticleMiddleContent({
  articalInfo = {} }) {
  const { id, title, author, time, reading, content, comments } = articalInfo

  /* 数组里面村的是JSON对象，但是对象还没有JSON化出来这是为什么？ */
  /* 前后台传输数据浏览器只会JSON化一层？ */
  const newCommentList = comments.length <= 0 ? [] : JSON.parse(comments)
  // console.log(newCommentList)

  return (
    <div className='articlemiddlecontent__div--maxcontainerflex'>
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
      <ArticalComment id={id} commentsList={newCommentList}></ArticalComment>
    </div>
  )
}
