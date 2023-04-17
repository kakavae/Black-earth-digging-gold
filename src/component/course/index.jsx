import React from 'react'
// import { useRoutes } from 'react-router-dom'
import './index.css'
import CourseMiddle from './courseMiddle'
import CourseRightAdvertisement from './courseRightAdvertisement'

export default function Course() {

  return (
    /* 控制版心的盒子的位置 */
    <div className='course__div--bgc'>
      <div className="course__div--container">
        <div className="course__div--view">
          {/* 右边和header一直固定，左侧自适应 */}
          <CourseMiddle></CourseMiddle>
          <div className='course__div--transform'>
            <CourseRightAdvertisement></CourseRightAdvertisement>
          </div>
        </div>
      </div>
    </div>
  )
}
