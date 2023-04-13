import React from 'react'
import './index.css'

export default function RecommondArtical() {
  return (
    <div className='recommondArtical__div--container'>
      <div className='recommondArtical__div--line'>
        <div className='recommondArtical__div--articalmsg'>
          <div className="recommondArtical__div--author">
            <span className="recommondArtical__span--float recommondArtical__span--author">云墨</span>
            <span className="recommondArtical__span--float">1月前</span>
            <span className="recommondArtical__span--float">后端&nbsp;·&nbsp;前端&nbsp;·js</span>
          </div>
          <a href="/">
            <h3 className='recommondArtical__h3--title'>资深前端的建议</h3>
          </a>
          <a href="/">
            <p className='recommondArtical__p--artical'>大家好，我是云牧，这次要讲的是一些后端的知识，我认为不会后端的前端不是好前端，我们...</p>
          </a>
        </div>
        <img className='recommondArtical__img--artical' src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2c68eed94124e9faeaabc8602fd6c07~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?" alt="作为前端应该了解的后端常识" />
      </div>
    </div>
  )
}
