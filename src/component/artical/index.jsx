import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import './index.css'
import { getArticalDetail } from '../../api'
import ArticalLeftLike from './articalLeftLike'
import ArticalRightNav from './articalRightNav'
import ArticleMiddleContent from './articalMiddleContent'

/* 拿着文章的id--urlParams参数--去获取文章详情 */
export async function loader({ params }) {
  /* 
    1.拿着这个参数去后台请求文章的数据
    2.回来的数据渲染到页面上
  */
  // console.log(getArticalDetail)
  try {
    const articalInfo = await getArticalDetail(params.id)
    return { articalInfo }
  } catch (e) {
    console.log(e, '跳转到错误页面')
  }
  return {}
}

export default function Home() {
  const { articalInfo } = useLoaderData()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    /* 控制版心的盒子的位置 */
    <div className='artical__div--bgc'>
      <div className="artical__div--container">
        <div className="artical__div--view">
          {/* 左侧点赞区 */}
          <ArticalLeftLike></ArticalLeftLike>
          {/* 中间模块 设置了flex: 1 */}
          <ArticleMiddleContent articalInfo={articalInfo[0]}></ArticleMiddleContent>
          {/* 右边的aside */}
          <ArticalRightNav articalInfo={articalInfo[0]}></ArticalRightNav>
        </div>
      </div>
    </div>
  )
}
