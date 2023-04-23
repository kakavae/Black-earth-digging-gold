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
    if (articalList.code === 200) {
      const articalListData = articalList.data.map((item) => {
        /* 分类分开 */
        item.classification = item.classification.split(' ')
        /* 添加url */
        item.url = '/post/' + item.id
        return item
      })
      return articalListData
    } else {
      return []
    }

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
        <RecommondSelectList searchClassList={[
          { id: 1, content: '全部' },
          { id: 2, content: '前端' },
          { id: 3, content: '后端' },
          { id: 4, content: 'Vue.js' },
          { id: 5, content: 'React' },
          { id: 6, content: 'Node.js' },
          { id: 7, content: 'MySql' },
        ]}></RecommondSelectList>
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
