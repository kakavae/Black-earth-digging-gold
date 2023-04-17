import React from 'react'
import './index.css'

export default function CourseRightAdvertisement() {
  return (
    <div className='courserightad__div--container'>

      <a href='/' className='courserightad__a--coursecenter'>
        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/booklet.2579a53.png" alt="课程中心" />
        <span>课程中心</span>
      </a>

      <div href="/" className='courserightad__div--extensioncenter'>
        <div><h3>推广中心</h3>扫码下载App</div>
        <div>二维码</div>
      </div>

      <a href="/" className='courserightad__a--manual'>
        <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/478b9655d11e41c79742be6060c3e63e~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp" alt="" />
      </a>

      <div className='courserightad__div--manualintroduce'>
        <div className='courserightad__div--aboutmanual'>
          <div>黑金小册是什么</div>
          <p>一个小篇幅、高浓度、成体系、有收益的技术学习平台</p>
        </div>
        <div className='courserightad__div--follow'>
          <p>关注黑金小册</p>
          <div></div>
        </div>
      </div>
    </div>
  )
}
