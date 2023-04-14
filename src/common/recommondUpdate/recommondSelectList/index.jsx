import React from 'react'
import './index.css'
import { useState, useRef, useEffect } from 'react'
import throttle from '../../../useFunction/throttle'

export default function RecommondSelectList() {
  const searchClassList = [
    { id: 1, content: '全部' },
    { id: 2, content: '前端' },
    { id: 3, content: '后端' },
    { id: 4, content: 'Vue.js' },
    { id: 5, content: 'React' },
    { id: 6, content: 'Node.js' },
    { id: 7, content: 'MySql' },
  ]
  /* 控制是否显示下拉菜单的值，控制行内visibility */
  const [isDisplay, setIsDisplay] = useState(false)
  /* 设置ul的位置是在input的上下 */
  const [isTop, setIsTop] = useState('0px')
  /* 控制a活跃的时候的样式---修改活跃的id--决定是否对当前的a添加class */
  const [isActive, setIsActive] = useState(searchClassList[0].id)
  /* input里面的响应式数据 */
  const [iptContent, setIptContent] = useState('全部')

  const input = useRef(null)
  const ul = useRef(null)

  /* 显示下拉菜单 */
  const displayEle = () => {
    judgePosition()
    setIsDisplay(true)
  }
  /* 隐藏下拉菜单 */
  const hiddenEle = () => {
    setTimeout(() => {
      setIsDisplay(false)
    }, 100)
    // setIsDisplay(false)
  }

  /* 判断是否能放在input上面的函数 */
  const judgePosition = () => {
    if (ul.current.offsetHeight < input.current.getBoundingClientRect().top) {
      setIsTop(- ul.current.offsetHeight - 5 + 'px') // 放在上方
    } else {
      setIsTop(input.current.offsetHeight + 5 + 'px')  // 放在下方
    }
  }

  /* 鼠标经过，修改a的背景和字体颜色 */
  const changeBgc = (event) => {
    setIsActive(event.target.dataset.id * 1)
  }

  /* 鼠标点击，修改input里面元素的样式 */
  const changeIptContent = (event) => {
    event.preventDefault()
    setIptContent(event.target.dataset.content)
  }

  /* 输入input里面的数据，同步修改响应式的state */
  const changeIptText = (event) => {
    setIptContent(event.target.value)
    console.log('拿着input的value防抖式请求服务器数据')
  }

  /* 第二个参数是空数组，相当于第一次调用的时候在组件挂载到DOM之后执行 */
  useEffect(() => {
    /* 节流触发scroll事件，判断ul能否放在input上面 */
    window.addEventListener('scroll', throttle(judgePosition, 50))
  }, [])

  return (
    <div
      className="recommondupdate__div--center"
    >
      {/* select选择功能 */}
      <input
        type="text"
        value={iptContent}
        onChange={changeIptText}
        className='recommondupdate__input'
        onFocus={displayEle}
        onBlur={hiddenEle}
        ref={input}
      />
      <ul
        className='recommondupdate__ul--selectcontainer'
        style={{
          visibility: isDisplay ? 'visible' : 'hidden',
          // opacity: isDisplay ? 1 : 0,
          // display: isDisplay ? 'block' : 'none',
          top: isTop
        }}
        ref={ul}
        onMouseOver={changeBgc}
        onClick={changeIptContent}
      >
        {searchClassList.map((item) => {
          return <li key={item.id}
          >
            <a
              href="/"
              className={'recommondupdate__li--selectEle' + (isActive === item.id ? ' recommondupdate__a--active' : '')}
              /* 事件代理 */
              data-id={item.id}
              data-content={item.content}
            >{item.content}</a>
          </li>
        })}
      </ul>
    </div>
  )
}
