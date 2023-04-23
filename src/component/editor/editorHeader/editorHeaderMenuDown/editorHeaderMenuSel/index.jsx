import React from 'react'
import './index.css'
import RecommondSelectList from '../../../../../common/homeMainContent/recommondUpdate/recommondSelectList'


export default function EditorHeaderMenuSel({ articalInfo, setArticalInfo }) {
  return (
    <div>
      <RecommondSelectList
        searchClassList={[
          { id: 1, content: '全部' },
          { id: 2, content: '前端' },
          { id: 3, content: 'JavaScript' },
          { id: 4, content: '面试' },
          { id: 5, content: 'GitHub' },
          { id: 6, content: '架构' },
          { id: 7, content: '算法' },
          { id: 8, content: '前端框架' },
          { id: 9, content: 'Java' },
        ]}
        iptClassName={'editorheadermenusel__ipt--border'}
        ulClassNameWidth={'editorheadermenusel__ul--width'}
        articalInfo={articalInfo}
        setArticalInfo={setArticalInfo}
      ></RecommondSelectList>
    </div>
  )
}
