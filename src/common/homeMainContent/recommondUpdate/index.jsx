import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import RecommondArtical from './recommondArtical'
import RecommondSelectList from './recommondSelectList'
import { getArticleRecommendList } from '../../../api/index.js'
import { useLoaderData } from 'react-router-dom'
import throttle from '../../../useFunction/throttle'

const processArticalList = (articalList = []) => {
  const newList = []
  articalList.forEach((item) => {
    newList.push({
      ...item,
      classification: item.classification.split(' '),
      url: '/post/' + item.id
    })
  })
  return newList
}

/* 获取一个数组，根据返回的数组值渲染不同数量的组件，同时将渲染对象值传递给子组件 */
export const loader = async () => {
  try {
    let articalList = await getArticleRecommendList()
    if (articalList.code === 200) {
      const articalListData = processArticalList(articalList.data)
      return articalListData
    } else {
      return []
    }
  } catch (e) {
    console.log('请求服务器出错', e)
  }
  return []
}

export default function RecommondUpdate({ isDisplay }) {
  /* 维护一个响应式列表，如果下拉到底部，就触发loader，重新向列表里面添加新的十条数据 */
  const articalList = useLoaderData()
  const [articalListPlus, setArticalListPlus] = useState([...articalList])

  /* 需要取消监听的函数 */
  const addList = () => {
    window.addEventListener('scroll', async () => {
      /* 滚上去的高度，整个页面的高度，可视区域的高度 */
      console.log(parseInt(document.body.clientHeight - window.scrollY), window.innerHeight)
      if (parseInt(document.body.clientHeight - window.scrollY) <= window.innerHeight) {
        /* 滚下来的时候会触发多次，导致多个请求任务积攒在一起，因为达到上面的条件在滚动过程中会有很多次 */
        const newListData = await getArticleRecommendList()
        if (newListData.code === 200) {
          setArticalListPlus((preValue) => {
            return [...preValue, ...processArticalList(newListData.data)]
          })
        }
      }
    })
    /* 组件卸载的时候取消监听 */
    return () => {
      window.removeEventListener('scroll', addList)
    }
  }

  /* 监听滚动事件，当滚动到还剩200px的时候，就开始加载新的列表数据
  加载新的列表数据的时候，不能再请求更新的列表数据，也就是不能同时发起多个请求
  在新的数据回来，添加到页面上之前，scroll都不能触发请求数据

  拿着一个变量，开始请求设为false，进不去条件，当DOM被更新之后才将这个变量设置为true，允许scroll再次触发事件
  */

  useEffect(addList, [addList])

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
        {/* 只给倒数第五个元素传递ref对象，用于观察那个元素 */}
        {articalListPlus.map((item, index) => {
          return <RecommondArtical
            key={index}
            articalInfo={item}
          ></RecommondArtical>
        })}
      </div>
    </div>
  )
}
