import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import RecommondArtical from './recommondArtical'
import RecommondSelectList from './recommondSelectList'
import { getArticleRecommendList } from '../../../api/index.js'
import { useLoaderData } from 'react-router-dom'
import { isDisplayContext } from '../../../context/app'
import { default as processArticalList } from '../../../useHooks/recommondUpdate'

/* 获取一个数组，根据返回的数组值渲染不同数量的组件，同时将渲染对象值传递给子组件 */
export const loader = async () => {
  try {
    let articalList = await getArticleRecommendList()
    if (articalList.code === 200) {
      const articalListData = processArticalList(articalList.data)
      /* 每次重新加载home组件的时候都会loader不同的数据，但是这个数据为什么没有被渲染到页面上 */
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

  const { articalListPlus, setArticalListPlus } = useContext(isDisplayContext)

  /* 维护一个响应式列表，如果下拉到底部，就触发loader，重新向列表里面添加新的十条数据 */
  const articalList = useLoaderData()
  /* 思路是下面的列表维护需要articalListPlus，但是articalListPlus不会随着上面的articalList同步更新数据 */
  /* 所以使用useEffect钩子让articalList的值更新的时候立马更新articalListPlus */
  // const [articalListPlus, setArticalListPlus] = useState([...articalList])
  useEffect(() => {
    setArticalListPlus([...articalList])
  }, [articalList, setArticalListPlus])

  /* 需要取消监听的函数 */
  const [flag, setFlag] = useState(true)
  const addList = async () => {
    /* 滚上去的高度，整个页面的高度，可视区域的高度 */
    // console.log(parseInt(document.body.clientHeight - window.scrollY), window.innerHeight)
    /* 为什么小于等于的时候获取了很多次数据---因为小于等于的这个事件在很短的情况下触发了多次，而你请求的数据还没有回来， */
    console.log(document.body.clientHeight - window.scrollY, window.innerHeight)
    if (flag && document.body.clientHeight - window.scrollY <= window.innerHeight + 10) {
      setFlag(false)
      /* 滚下来的时候会触发多次，导致多个请求任务积攒在一起，因为达到上面的条件在滚动过程中会有很多次 */
      /* 尝试--限制，用一个变量限制，如果第一次触发了，就将这个变量改为false，后面的多次就算条件成立也不会触发 */
      const newListData = await getArticleRecommendList()
      setFlag(false)
      if (newListData.code === 200) {
        setArticalListPlus((preValue) => {
          return [...preValue, ...processArticalList(newListData.data)]
        })
      }
    }
  }
  /* 监听滚动事件，当滚动到还剩200px的时候，就开始加载新的列表数据
  加载新的列表数据的时候，不能再请求更新的列表数据，也就是不能同时发起多个请求
  在新的数据回来，添加到页面上之前，scroll都不能触发请求数据

  拿着一个变量，开始请求设为false，进不去条件，当DOM被更新之后才将这个变量设置为true，允许scroll再次触发事件
  */

  /* 
    需要解决的问题：下拉到底部的时候，可能会请求两次数据，使用一个state来控制，因为state能够保存状态
    函数触发，就改为false，让其他触发的任务进不了任务体

    加了节流之后，下拉到底部，可能一次数据都没有请求，怎么解决？
    原因：页面滚动到最底部之后就不会再触发scroll事件，最后一次触发的时候不满足设定的触发条件
    给不等式右边+100px
    不加节流的时候就不会出现这个问题
    而且这里也不必出现节流的概念了，因为实际的任务代码---请求后台逻辑并不会每一次滚动都会触发，而是在特定条件下才会触发
  */

  useEffect(() => {
    window.addEventListener('scroll', addList)
    /* 组件卸载的时候取消监听 */
    return () => {
      window.removeEventListener('scroll', addList)
    }
  }, [])

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
