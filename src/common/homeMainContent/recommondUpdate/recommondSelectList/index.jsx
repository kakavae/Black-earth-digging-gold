import React from 'react'
import './index.css'
import { useState, useRef } from 'react'
import throttle from '../../../../useFunction/throttle'
import { useHref } from 'react-router-dom'

export default function RecommondSelectList({
  searchClassList,
  iptClassName = 'recommondupdate__input',
  ulClassNameWidth = '',
  /* 下面两个是发表文章组件收集文章分类信息的响应式数据 */
  articalInfo,
  setArticalInfo
}) {

  /* 控制是否显示下拉菜单的值，控制行内visibility */
  const [isDisplay, setIsDisplay] = useState(false)
  /* 设置ul的位置是在input的上下 */
  const [isTop, setIsTop] = useState('0px')
  /* 控制a活跃的时候的样式---修改活跃的id--决定是否对当前的a添加class */
  const [isActive, setIsActive] = useState(searchClassList[0].id)
  /* input里面的响应式数据 */
  const [iptContent, setIptContent] = useState('全部')

  /* 控制当前如果是在综合页面，就不显示input框，display设置为none */
  const isDisplayIpt = useHref()

  /* 拿input和下拉选择的ul的DOM，计算动态位置 */
  const input = useRef(null)
  const ul = useRef(null)

  /* 判断是否能放在input上面的函数 */
  const judgePosition = () => {
    if (ul.current) {
      if (ul.current.offsetHeight < input.current.getBoundingClientRect().top) {
        setIsTop(- ul.current.offsetHeight - 5 + 'px') // 放在上方
      } else {
        setIsTop(input.current.offsetHeight + 5 + 'px')  // 放在下方
      }
    }
  }
  const throJudgePosition = throttle(judgePosition, 50)

  /* 1.js写CSS行为 */
  /* 1.1显示下拉菜单 */
  const displayEle = () => {
    judgePosition()
    /* 节流触发scroll事件，判断ul能否放在input上面 */
    window.addEventListener('scroll', throJudgePosition)
    setIsDisplay(true)
  }
  /* 1.2隐藏下拉菜单 */
  const hiddenEle = () => {
    setIsDisplay(false)
    /* 停止触发scroll事件 */
    window.removeEventListener('scroll', throJudgePosition)
  }

  /* 1.3鼠标经过，修改a的背景和字体颜色 */
  const changeBgc = (event) => {
    setIsActive(event.target.dataset.id * 1)
  }

  /* 根据是否向下传递文章信息来修改文章信息 */
  const changeArticalInfo = (name) => {
    if (setArticalInfo && articalInfo) {
      setArticalInfo({
        ...articalInfo,
        classification: [
          ...articalInfo.classification,
          name
        ]
      })
    }
  }

  /* 鼠标点击，修改input里面元素的样式 */
  const changeIptContent = (event) => {
    event.preventDefault()
    setIptContent(event.target.dataset.content)
    changeArticalInfo(event.target.dataset.content)
  }

  /* 输入input里面的数据，同步修改响应式的state */
  const changeIptText = (event) => {
    setIptContent(event.target.value)
    changeArticalInfo(event.target.value)
  }

  return (
    <div
      className="recommondupdate__div--center"
      style={{
        display: isDisplayIpt === '/recommended' ? 'none' : 'block'
      }}
    >
      {/* select选择功能 */}
      <input
        type="text"
        value={iptContent}
        onChange={changeIptText}
        className={iptClassName}
        onFocus={displayEle}
        onBlur={hiddenEle}
        ref={input}
      />
      <ul
        className={'recommondupdate__ul--selectcontainer ' + ulClassNameWidth}
        style={{
          // visibility: isDisplay ? 'visible' : 'hidden',
          // opacity: isDisplay ? 1 : 0,
          display: isDisplay ? 'block' : 'none',
          top: isTop
        }}
        ref={ul}
        onMouseOver={changeBgc}
        onClick={changeIptContent}
        /* 防止input失去焦点触发，拿不到当前DOM */
        onMouseDown={(event) => { event.preventDefault() }}
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
