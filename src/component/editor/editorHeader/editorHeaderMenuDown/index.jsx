import React from 'react'
import './index.css'
import useMenuFocuse from '../../../../useHooks/editorHeaderMenuDown'
import EditorHeaderMenuSel from './editorHeaderMenuSel'
import { Form } from 'react-router-dom'

export default function EditorHeaderMenuDown({ isDisplay, publish, articalInfo, setArticalInfo }) {
  const classfication = [
    { id: '1', name: '后端' },
    { id: '2', name: '前端' },
    { id: '3', name: 'Vue' },
    { id: '4', name: 'iOS' },
    { id: '5', name: 'Android' },
    { id: '6', name: '人工智能' },
    { id: '7', name: '开发工具' },
    { id: '8', name: '代码人生' },
  ]

  const { focuseId, changeFocuse } = useMenuFocuse()

  const classification = (event) => {
    changeFocuse(event)
    const id = event.target.dataset.id
    setArticalInfo({
      ...articalInfo,
      classification: [
        ...articalInfo.classification,
        classfication.filter((item) => item.id === id)[0].name
      ]
    })
  }

  /* 改变摘要 */
  const changeLessContent = (event) => {
    setArticalInfo({
      ...articalInfo,
      lesscontent: event.target.value
    })
  }
  return (
    <div
      className={'eidtorheadermenudown__div--absolute ' + (isDisplay ? '' : 'eidtorheadermenudown__div')}
    >
      <span className='eidtorheadermenudown__div--arrow'></span>
      <i className='eidtorheadermenudown__div--arrowfff'></i>
      <h3>发布文章</h3>
      <div className='eidtorheadermenudown__div--container'>
        <div className='eidtorheadermenudown__div--classfication'>
          <div>分类</div>
          <ul onClick={classification}>
            {classfication.map((item) => {
              return <li
                key={item.id}
                data-id={item.id}
                className={focuseId === item.id ? 'eidtorheadermenudown__li--active' : ''}
              >{item.name}</li>
            })}
          </ul>
        </div>
        <div className='eidtorheadermenudown__div--tagflex'>
          <div>添加标签</div>
          {/* 实现下拉选择框组件 */}
          <EditorHeaderMenuSel
            articalInfo={articalInfo}
            setArticalInfo={setArticalInfo}
          ></EditorHeaderMenuSel>
        </div>
        <div>文章封面</div>
        <div>收录至专栏</div>
        <div>创作话题</div>
        <div>
          <div>编辑摘要</div>
          <textarea
            maxLength="100" rows="5"
            className='eidtorheadermenudown_textarea--size'
            onChange={changeLessContent}
          ></textarea>
        </div>
      </div>
      <div className='eidtorheadermenudown__div--topline'>
        <button className='editorheader__btn--font'>取消</button>
        <button
          type='submit'
          className='editorheader__btn--bgc'
          onClick={publish}
        >确定并发布</button>
      </div>
    </div>
  )
}
