import React from 'react'
import './index.css'

export default function Recommond() {
  return (
    <div className='recommond__div--container'>
      <div className='recommond__div--title'>
        <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/article.52e2cca.png" alt="icon" className="recommond--hot-icon" />
        <span className='recommond__span--title'>综合文章榜</span>
        <a href="/">
          <span className="recommond__span--more">更多</span>
          <svg data-v-9019505c="" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6094 4.99959L3.22118 1.61137C3.13982 1.53001 3.13982 1.3981 3.22118 1.31674L3.5158 1.02212C3.59716 0.940757 3.72907 0.940757 3.81043 1.02212L7.49328 4.70496C7.656 4.86768 7.656 5.1315 7.49328 5.29422L3.81043 8.97707C3.72907 9.05843 3.59716 9.05843 3.5158 8.97707L3.22118 8.68244C3.13982 8.60108 3.13982 8.46917 3.22118 8.38781L6.6094 4.99959Z"></path></svg>
        </a>
      </div>
      <ul className="recommond__ul--list">
        <li><div className='recommond__div--numberfont'>1</div><span className="recommond__span--font">我是</span></li>
        <li><div className='recommond__div--numberfont'>2</div><span className="recommond__span--font">我是</span></li>
        <li><div className='recommond__div--numberfont'>3</div><span className="recommond__span--font">我是</span></li>
      </ul>
    </div>
  )
}
