import React from 'react'
import './index.css'

export default function CourseClassification() {
  const course = [{ id: 1, title: '黑金小册', url: '/course' }, { id: 2, title: '内部课程', url: '/' }]
  const classfication = [
    { id: 1, title: '全部', url: '/course' },
    { id: 2, title: '后端', url: '/course' },
    { id: 3, title: '前端', url: '/course' },
    { id: 4, title: 'Android', url: '/course' },
    { id: 5, title: 'iOS', url: '/course' },
    { id: 6, title: '人工智能', url: '/course' },
    { id: 7, title: '开发工具', url: '/course' },
    { id: 8, title: '代码人生', url: '/course' },
    { id: 9, title: '阅读', url: '/course' },
  ]

  return (
    <div className='courseclassification__div--container'>
      <div className='courseclassification__div--course'>
        <div>
          <span className='courseclassification__span--course'>课程：</span>
          <ul className='courseclassification__ul--course'>
            {course.map((item) => {
              return <li key={item.id}><a href={item.url}
                className='courseclassification__a--classitem'>{item.title}</a></li>
            })}
          </ul>
        </div>
        <svg data-v-40ed79b8="" data-v-0f9eb81c="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-search"><path data-v-40ed79b8="" data-v-0f9eb81c="" fillRule="evenodd" clipRule="evenodd" d="M17.0881 10.8659C17.0881 14.1944 14.3898 16.8928 11.0612 16.8928C7.73269 16.8928 5.03438 14.1944 5.03438 10.8659C5.03438 7.53737 7.73269 4.83906 11.0612 4.83906C14.3898 4.83906 17.0881 7.53737 17.0881 10.8659ZM16.3575 16.6287C14.9638 17.9103 13.1039 18.6928 11.0612 18.6928C6.73857 18.6928 3.23438 15.1886 3.23438 10.8659C3.23438 6.54326 6.73857 3.03906 11.0612 3.03906C15.3839 3.03906 18.8881 6.54326 18.8881 10.8659C18.8881 12.5131 18.3793 14.0414 17.5103 15.3022C17.5848 15.3427 17.6548 15.3944 17.7178 15.4574L20.5035 18.2431C20.855 18.5945 20.855 19.1644 20.5035 19.5159C20.152 19.8673 19.5822 19.8673 19.2307 19.5159L16.445 16.7301C16.4129 16.698 16.3837 16.6641 16.3575 16.6287Z" fill="#515767"></path></svg>
      </div>
      <div className='courseclassification__div--class'>
        <span className='courseclassification__span--course'>分类：</span>
        <ul className='courseclassification__ul--course '>
          {classfication.map((item) => {
            return <li key={item.id}><a href={item.url}
              className='courseclassification__a--classitem'>{item.title}</a></li>
          })}
        </ul>
      </div>
      <div className='courseclassification__div--sort'>
        <div className='courseclassification__div---acontainer'>
          <a href="/course">全部</a>
          <a href="/course">最新</a>
          <a href="/course">热销</a>
          <a href="/course" className='courseclassification__a--lastArrow'>价格
            <div>
              <div className='courseclassification__div--upArrow'></div>
              <div className='courseclassification__div--downArrow'></div>
            </div>
          </a>
        </div>
        <div className='courseclassification__div--vipcourse'>
          <input type="checkbox" name='vip-course' id="vip-course" />
          <label htmlFor="vip-course">查看vip课程</label>
        </div>
      </div>
    </div>
  )
}
