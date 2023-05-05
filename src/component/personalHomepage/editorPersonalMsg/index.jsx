import React, { useContext, useRef, useState } from 'react'
import './index.css'
import { Link, Form, redirect } from 'react-router-dom'
import NavLeft from '../../../common/navLeft'
import { isDisplayContext } from '../../../context/app'
import { changePersonalMsg, changeHeaderImg as changeHeaderAPI } from '../../../api'

export const action = async ({ request }) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  // const res = await changePersonalMsg(updates)
  // console.log(res)
  // if (res.code === 200) {
  //   return redirect('/')
  // }

  return null
}

/* 获取到表单输入的数据Form--提交submit--返回成功结果ajax--跳转到个人中心界面redirect */
export default function EditorPersonalMsg() {
  const menuList = [
    { id: 1, title: '个人资料', url: '/user/settings/profile', dContent: 'M12.7568 1.3335C13.4239 1.3335 13.9641 1.86183 13.9983 2.52111L14 2.58746V6.34783V9.44263L13.7881 9.41059C13.6565 9.39071 13.5435 9.30673 13.4865 9.18654L11.8614 5.76125C11.7168 5.45652 11.2832 5.45652 11.1386 5.76125L9.51354 9.18654C9.45652 9.30673 9.34347 9.39071 9.21193 9.41059L5.77633 9.92991C5.45315 9.97876 5.32181 10.3736 5.55131 10.6063L8.04943 13.1394C8.13927 13.2305 8.18011 13.3591 8.1593 13.4853L7.90953 15.0002H5.42606H3.24324C2.57608 15.0002 2.03587 14.4718 2.00171 13.8125L2 13.7462V2.58746C2 1.91989 2.51869 1.37002 3.17696 1.33524L3.24324 1.3335H12.7568ZM7.33333 7.00017C7.33333 6.81608 7.18409 6.66684 7 6.66684H5C4.8159 6.66684 4.66666 6.81608 4.66666 7.00017V7.66684C4.66666 7.85093 4.8159 8.00017 5 8.00017H7C7.18409 8.00017 7.33333 7.85093 7.33333 7.66684V7.00017ZM9.66666 4.00017C9.85076 4.00017 10 4.14941 10 4.3335V5.00017C10 5.18426 9.85076 5.3335 9.66666 5.3335H5C4.8159 5.3335 4.66666 5.18426 4.66666 5.00017V4.3335C4.66666 4.14941 4.8159 4.00017 5 4.00017H9.66666Z' },
    { id: 2, title: '账号设置', url: '/', dContent: 'M0.666016 8.00033C0.666016 12.0504 3.94926 15.3337 7.99935 15.3337C12.0494 15.3337 15.3327 12.0504 15.3327 8.00033C15.3327 3.95024 12.0494 0.666992 7.99935 0.666992C3.94926 0.666992 0.666016 3.95024 0.666016 8.00033ZM5.43709 11.0048L9.3392 9.34286L11.0037 5.43876C11.0397 5.35428 11.0393 5.25869 11.0025 5.17455C10.9288 5.00586 10.7323 4.92887 10.5636 5.00259L6.68535 6.69744L5.00087 10.565C4.96428 10.649 4.96389 10.7444 4.9998 10.8287C5.07193 10.9981 5.26772 11.0769 5.43709 11.0048Z' },
    { id: 3, title: '消息设置', url: '/', dContent: 'M2 2C1.44772 2 1 2.44772 1 3V11C1 11.5523 1.44772 12 2 12H14C14.5523 12 15 11.5523 15 11V3C15 2.44772 14.5523 2 14 2H2ZM4.5 7C4.22386 7 4 7.22386 4 7.5V9.5C4 9.77614 4.22386 10 4.5 10H5C5.27614 10 5.5 9.77614 5.5 9.5V7.5C5.5 7.22386 5.27614 7 5 7H4.5ZM7 5C7 4.72386 7.22386 4.5 7.5 4.5H8C8.27614 4.5 8.5 4.72386 8.5 5V9.5C8.5 9.77614 8.27614 10 8 10H7.5C7.22386 10 7 9.77614 7 9.5V5ZM10.5 6C10.2239 6 10 6.22386 10 6.5V9.5C10 9.77614 10.2239 10 10.5 10H11C11.2761 10 11.5 9.77614 11.5 9.5V6.5C11.5 6.22386 11.2761 6 11 6H10.5Z' },
    { id: 4, title: '简历管理', url: '/', dContent: 'M2 2C1.44772 2 1 2.44772 1 3V6H15V3C15 2.44772 14.5523 2 14 2H2ZM15 7.3H1V13C1 13.5523 1.44772 14 2 14H14C14.5523 14 15 13.5523 15 13V7.3ZM8.65811 8.02566C8.92009 8.11298 9.06167 8.39614 8.97434 8.65811L7.97434 11.6581C7.88702 11.9201 7.60386 12.0617 7.34189 11.9743C7.07991 11.887 6.93833 11.6039 7.02566 11.3419L8.02566 8.34189C8.11298 8.07991 8.39614 7.93833 8.65811 8.02566ZM3.5 5C3.77614 5 4 4.77614 4 4.5C4 4.22386 3.77614 4 3.5 4C3.22386 4 3 4.22386 3 4.5C3 4.77614 3.22386 5 3.5 5ZM5.5 4.5C5.5 4.77614 5.27614 5 5 5C4.72386 5 4.5 4.77614 4.5 4.5C4.5 4.22386 4.72386 4 5 4C5.27614 4 5.5 4.22386 5.5 4.5ZM6.5 5C6.77614 5 7 4.77614 7 4.5C7 4.22386 6.77614 4 6.5 4C6.22386 4 6 4.22386 6 4.5C6 4.77614 6.22386 5 6.5 5ZM6.44721 8.77639C6.57071 9.02338 6.4706 9.32372 6.22361 9.44721L5.11803 10L6.22361 10.5528C6.4706 10.6763 6.57071 10.9766 6.44721 11.2236C6.32372 11.4706 6.02338 11.5707 5.77639 11.4472L3.77639 10.4472C3.607 10.3625 3.5 10.1894 3.5 10C3.5 9.81061 3.607 9.63748 3.77639 9.55279L5.77639 8.55279C6.02338 8.42929 6.32372 8.5294 6.44721 8.77639ZM9.77639 9.44721C9.5294 9.32372 9.42929 9.02338 9.55279 8.77639C9.67628 8.5294 9.97662 8.42929 10.2236 8.55279L12.2236 9.55279C12.393 9.63748 12.5 9.81061 12.5 10C12.5 10.1894 12.393 10.3625 12.2236 10.4472L10.2236 11.4472C9.97662 11.5707 9.67628 11.4706 9.55279 11.2236C9.42929 10.9766 9.5294 10.6763 9.77639 10.5528L10.882 10L9.77639 9.44721Z' },
    { id: 5, title: '屏蔽管理', url: '/', dContent: 'M0.666016 8.00033C0.666016 12.0504 3.94926 15.3337 7.99935 15.3337C12.0494 15.3337 15.3327 12.0504 15.3327 8.00033C15.3327 3.95024 12.0494 0.666992 7.99935 0.666992C3.94926 0.666992 0.666016 3.95024 0.666016 8.00033ZM5.43709 11.0048L9.3392 9.34286L11.0037 5.43876C11.0397 5.35428 11.0393 5.25869 11.0025 5.17455C10.9288 5.00586 10.7323 4.92887 10.5636 5.00259L6.68535 6.69744L5.00087 10.565C4.96428 10.649 4.96389 10.7444 4.9998 10.8287C5.07193 10.9981 5.26772 11.0769 5.43709 11.0048Z' },
    { id: 6, title: '标签管理', url: '/', dContent: 'M11.822 8.4388C11.8045 6.66562 13.268 5.81556 13.3331 5.77312C12.5106 4.56956 11.2296 4.40506 10.7733 4.38581C9.68308 4.27556 8.64621 5.02763 8.09277 5.02763C7.54108 5.02763 6.68708 4.402 5.78277 4.41863C4.59452 4.43613 3.49858 5.10944 2.88696 6.17387C1.65233 8.3163 2.57064 11.4899 3.77421 13.2277C4.36221 14.0782 5.06352 15.0332 5.98402 14.9991C6.87039 14.9637 7.20596 14.4255 8.27739 14.4255C9.34883 14.4255 9.65027 14.9991 10.5887 14.9816C11.5425 14.9637 12.1471 14.1149 12.7311 13.2618C13.4062 12.2752 13.6845 11.3197 13.7006 11.2707C13.6796 11.2611 11.8404 10.5567 11.822 8.4388ZM10.0593 3.23563C10.548 2.64281 10.8779 1.82031 10.7878 1C10.0838 1.02888 9.23071 1.469 8.72583 2.06006C8.27258 2.58463 7.87621 3.422 7.98252 4.22613C8.76827 4.28737 9.57021 3.82669 10.0593 3.23563Z' },
  ]

  const { userInfo } = useContext(isDisplayContext)

  const fileIpt = useRef()

  const [isDisplayImg, setIsDisplayImg] = useState(true)

  /* 更换头像 */
  /* 监听文件input改变的事件，拿到节点的files，发起上传的请求 */
  const changeHeaderImg = async (event) => {
    /* 先删除头像节点 */
    setIsDisplayImg(false)

    const imgFile = event.target.files[0]
    const formData = new FormData()

    // 格式校验
    if (!imgFile || !imgFile.type.match('image.*')) {
      alert('请上传正确的图片格式')
      return
    }

    formData.append('headerImg', imgFile, 'test.jpg')

    const resData = await changeHeaderAPI(formData)
    console.log(resData)
    /* 修改图片之后，服务器返回的还是相同的url地址，怎么更新页面里面的url地址 */
    /* 修改成功，那么头像换为原来的节点 */
    if (resData.code === 200) {
      setIsDisplayImg(true)
    }
  }

  /* 提交头像的修改信息 -- 该方法和表单的提交会同时触发，不影响之前的接口*/
  const publishImg = async () => {
    const imgFile = fileIpt.current.files[0]  // input只上传一张照片，这个照片就是列表的第一个
    const formData = new FormData()

    // 格式校验
    if (!imgFile || !imgFile.type.match('image.*')) {
      alert('请上传正确的图片格式')
      return
    }

    formData.append('headerImg', imgFile, 'test.jpg')
    console.log('@', userInfo.id + '_headerImg' + imgFile.name)

    const resData = await changeHeaderAPI(formData)
    console.log(resData)
    /* 修改图片之后，服务器返回的还是相同的url地址，怎么更新页面里面的url地址 */

  }

  return (
    <div className='editorpersonalmsg__div--bgc'>
      <div className='editorpersonalmsg__div--margin'>
        <div className='editorpersonalmsg__div--return'>
          <Link to={`/user/${userInfo.id}`}>&lt;返回个人主页</Link>
        </div>
        <div className='editorpersonalmsg__div--user'>
          <NavLeft menuList={menuList} inicalIndex={0} classNamePosition='editorpersonalmsg__div--menuposition'></NavLeft>
          <div className='editorpersonalmsg__div--contentedit'>

            <div className='editorpersonalmsg__div--leftflex'>
              <Form method='post' id='personInfo-form' className='editorpersonalmsg__form--margin'>

                <h3>个人资料</h3>
                <p className='editorpersonalmsg__p--border'>
                  <span>用户名</span>
                  <input type="text" placeholder='填写你的用户名' name='userName' defaultValue={userInfo.userName} />
                </p>
                <p className='editorpersonalmsg__p--border'>
                  <span>职位</span>
                  <input type="text" placeholder='填写你的职位' name='position' defaultValue={userInfo.position} />
                </p>
                <p className='editorpersonalmsg__p--border'>
                  <span>公司</span>
                  <input type="text" placeholder='填写你的公司' name='company' defaultValue={userInfo.company} />
                </p>
                <p className='editorpersonalmsg__p--border'>
                  <span>个人主页</span>
                  <input type="text" placeholder='填写你的个人主页' name='userHomepage' defaultValue={userInfo.userHomepage} />
                </p>
                <p className='editorpersonalmsg__p--border'>
                  <span>个人介绍</span>
                  <textarea placeholder='填写你的个人爱好等' rows="5" cols="64" type="text" name='userIntroduce' defaultValue={userInfo.userIntroduce} />
                </p>
                <button onClick={publishImg} type='submit'>保存修改</button>
              </Form>
            </div>
            <div className='editorpersonalmsg__div--width'>
              <div className='editorpersonalmsg__div--headerflex'>
                {isDisplayImg ? <img src={userInfo.imgUrl} alt="头像" /> : <img src='/' alt='头像'></img>}
                {/* <img src={userInfo.imgUrl} alt="" /> */}
                <Form
                  method="post"
                  encType="multipart/form-data"
                >
                  <input
                    onChange={changeHeaderImg}
                    ref={fileIpt}
                    id='img-ipt' name='headerImg' type="file"
                    className='editorpersonalmsg__img--opacity'
                  />
                  <label
                    htmlFor="img-ipt"
                    className='editorpersonalmsg__label--mask'
                  >
                    <span>点击修改头像</span>
                  </label>
                </Form>
                <div>我的头像</div>
                <div>支持jpg,png</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
