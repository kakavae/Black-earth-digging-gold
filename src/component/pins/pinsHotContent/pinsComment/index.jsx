import React from 'react'
import './index.css'
import PinsCommentShare from './pinsCommentShare'

export default function PinsComment({ commentInfo = {
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
} }) {
  return (
    <>
      <div className='pinscomment__div--container'>
        <div className='pinscomment__div--topcontainer'>
          <div className='pinscomment__div--imgcicle'>
            <a href="/">
              <img src={commentInfo.headerImgUrl} alt="头像" className='pinscomment__img--header' />
            </a>
          </div>
          <div className='pinscomment__div--comentdetail'>
            <h3><a href="/">{commentInfo.userName}</a></h3>
            <div className='pinscomment__div--occupationfont'>
              <span>{commentInfo.occupation}</span>
              <span>&nbsp; · &nbsp;</span>
              <a href={commentInfo.commentUrl}>{commentInfo.time}</a>
            </div>
            <p>{commentInfo.contentInfo.content}</p>
            {
              commentInfo.contentInfo.commentImg.length > 0 ?
                <ul className='pinscomment__ul--commentImg'>
                  {commentInfo.contentInfo.commentImg.map((item) => {
                    return <li key={item.id}><img className='pinscomment__img--size' src={item.url} alt={item.alt} /></li>
                  })}
                </ul> : ''
            }
            <div className='pinscomment__div--clubflex'>
              <a href="/" className='pinscomment__a--flex'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path className='pinscomment__path--fillcolor' fillRule="evenodd" clipRule="evenodd" d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM11.36 8C11.7135 8 12.0052 8.28834 11.9489 8.63729C11.8578 9.20177 11.6463 9.74274 11.3259 10.2223C10.8864 10.8801 10.2616 11.3928 9.53073 11.6955C8.79983 11.9983 7.99556 12.0775 7.21964 11.9231C6.44371 11.7688 5.73098 11.3878 5.17157 10.8284C4.61216 10.269 4.2312 9.55628 4.07686 8.78036C3.92252 8.00444 4.00173 7.20017 4.30448 6.46927C4.60723 5.73836 5.11992 5.11365 5.77772 4.67412C6.25726 4.3537 6.79823 4.14219 7.36271 4.05109C7.71166 3.99477 8 4.28654 8 4.64C8 4.99346 7.7096 5.27254 7.36588 5.35495C7.05478 5.42953 6.75763 5.55881 6.48885 5.7384C6.04155 6.03728 5.69292 6.46209 5.48705 6.9591C5.28118 7.45612 5.22731 8.00302 5.33226 8.53065C5.43722 9.05827 5.69627 9.54293 6.07667 9.92333C6.45707 10.3037 6.94173 10.5628 7.46935 10.6677C7.99698 10.7727 8.54388 10.7188 9.0409 10.513C9.53791 10.3071 9.96272 9.95845 10.2616 9.51115C10.4412 9.24237 10.5705 8.94522 10.6451 8.63412C10.7275 8.2904 11.0065 8 11.36 8ZM10.5 6.5C11.0523 6.5 11.5 6.05228 11.5 5.5C11.5 4.94772 11.0523 4.5 10.5 4.5C9.94771 4.5 9.5 4.94772 9.5 5.5C9.5 6.05228 9.94771 6.5 10.5 6.5Z" fill="#1E80FF"></path></svg>
                <span>{commentInfo.contentInfo.club}</span>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path className='pinscomment__path--fillcolor' d="M3.11146 0.717157C2.95525 0.560948 2.70198 0.560948 2.54577 0.717157C2.38956 0.873367 2.38956 1.12663 2.54577 1.28284L3.11146 0.717157ZM5.65704 3.82843L5.93988 4.11127C6.09609 3.95506 6.09609 3.70179 5.93988 3.54558L5.65704 3.82843ZM2.54577 6.37401C2.38956 6.53022 2.38956 6.78349 2.54577 6.9397C2.70198 7.09591 2.95525 7.09591 3.11146 6.9397L2.54577 6.37401ZM2.54577 1.28284L5.3742 4.11127L5.93988 3.54558L3.11146 0.717157L2.54577 1.28284ZM5.3742 3.54558L2.54577 6.37401L3.11146 6.9397L5.93988 4.11127L5.3742 3.54558Z" fill="#1E80FF"></path></svg>
              </a>
              <span className='pinscomment__span--likescolor'><span>{commentInfo.contentInfo.likes}</span>&nbsp;likes</span>
            </div>
          </div>
        </div>
      </div>
      {/* 向下传递评论数 */}
      <PinsCommentShare commentNum={commentInfo.contentInfo.commentTimes}></PinsCommentShare>
    </>
  )
}
