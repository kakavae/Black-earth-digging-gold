import React from 'react'
import './index.css'

export default function CourseBook({ courseInfo = {
  id: 1,
  url: '/course',
  courseName: '网络编程之道',
  courseImg: {
    url: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f0e54a6902b4277818e94811ec35437~tplv-k3u1fbpfcp-no-mark:420:420:300:420.awebp?',
    alt: '「Netty 网络编程之道」封面'
  },
  courseIntro: 'Netty+互联网协议+Java NIO，搞定 Java 网络通信',
  authorInfo: {
    author: '肖恩Sean',
    authorIntro: '基础架构资深架构师',
    url: '/course'
  },
  price: '¥39.9',
  courseNum: '12',
  buyPerson: '301',
  surprise: '首单券后价'
} }) {
  return (
    <>
      <a href={courseInfo.url} className='coursebook__div--container'>
        <img src={courseInfo.courseImg.url} alt={courseInfo.courseImg.alt} />
        <div>
          <h3>{courseInfo.courseName}</h3>
          <p>{courseInfo.courseIntro}</p>
          <div>
            <span>{courseInfo.authorInfo.author}</span>&nbsp;
            <span>{courseInfo.authorInfo.authorIntro}</span>
          </div>
          <div>
            <span>{courseInfo.price}&nbsp;&nbsp;&nbsp;</span>
            <span>已更新{courseInfo.courseNum}小节&nbsp;{courseInfo.buyPerson}已购买</span>
          </div>
        </div>
      </a>
    </>
  )
}
