import React from 'react'
import './index.css'
import RecommondArtical from './recommondArtical'
import RecommondSelectList from './recommondSelectList'
import { getArticleRecommendList } from '../../../api/index.js'
import { useLoaderData } from 'react-router-dom'

/* 获取一个数组，根据返回的数组值渲染不同数量的组件，同时将渲染对象值传递给子组件 */
export const loader = async () => {
  try {
    let articalList = await getArticleRecommendList()
    articalList = articalList.map((item) => {
      /* 分类分开 */
      item.classification = item.classification.split(' ')
      /* 添加url */
      item.url = '/post/' + item.id
      return item
    })
    return articalList
  } catch (e) {
    console.log(e)
  }
}

export default function RecommondUpdate({ isDisplay }) {
  const articalList = useLoaderData()
  return (
    <div className='recommondupdate__div--container'>
      {/* 如果useHref是following，就不显示推荐更新标题 */}
      <div
        className='recommondupdate__div--reup'
        style={{
          display: isDisplay ? 'flex' : 'none'
        }}
      >
        <div>
          <a href="/" className='recommondupdate__a--re'>推荐</a>
          <a href="/" className='recommondupdate__a--up'>最新</a>
        </div>
        <RecommondSelectList></RecommondSelectList>
      </div>
      {/* 文章详情部分 */}
      <div>
        {articalList.map((item) => {
          return <RecommondArtical key={item.id} articalInfo={item}></RecommondArtical>
        })}
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
        <RecommondArtical></RecommondArtical>
      </div>
    </div>
  )
}
