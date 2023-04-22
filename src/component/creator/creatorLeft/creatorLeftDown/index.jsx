import React from 'react'
import './index.css'
import useNotifacationList from '../../../../useHooks/headerImgMemberNotifacation'

export default function CreatorLeftDown({
  title = '',
  contentList = [
    {}
  ]
}) {
  /* 点击上面的div，下下面的选项折叠 */
  /* 使用那个点击一个元素控制另一个元素显示与隐藏的钩子 */
  const { isDisplay, display, noDisplay } = useNotifacationList(true)

  const isShowList = () => {
    if (isDisplay) {
      noDisplay()
    } else {
      display()
    }
  }
  return (
    <>
      <div
        className='creatorLeftDown__div--flex'
        onClick={isShowList}
      >
        <span>{title}</span>
        <svg width="12" height="12" t="1561636071618" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="396860"
          className={'creatorLeftDown__svg ' + (isDisplay ? '' : 'creatorLeftDown__svg--active')}
        >
          <path d="M512 613.12l346.88-347.52a21.12 21.12 0 0 1 30.08 0l30.08 30.72a21.12 21.12 0 0 1 0 30.08L542.08 704a42.24 42.24 0 0 1-60.16 0L104.96 326.4a21.12 21.12 0 0 1 0-30.08l30.08-30.72a21.12 21.12 0 0 1 30.08 0z" p-id="396861"></path></svg>
      </div>
      <ul
        className={'creatorLeftDown__ul--container ' + (isDisplay ? '' : 'creatorLeftDown__ul--deactive')}
      >
        {contentList.map((item) => {
          return <li key={item.id}><a href="/">{item.title}</a></li>
        })}
      </ul>
    </>
  )
}
