import request from "./request";

/* 给所有的请求添加请求头应该放在这里 */
/* 1. 如果当前localStorage里面有token就取出token设置为请求头 */
/* setHeader('Authorization', token) */
const token = window.localStorage.getItem('token')
if (token) {
  request.useBefore = (xhr) => {
    xhr.setRequestHeader('Authorization', token)
  }
}

/* 获取文章的详细信息 */
const getArticalDetail = (id = 1) => {
  return request({
    method: 'GET',
    url: '/api/artical/' + id
  })
}

/* 主页获取文章推荐列表 */
const getArticleRecommendList = () => {
  return request({
    method: 'GET',
    url: '/api/artical/getBaseCategoryList'
  })
}

/* 获取注册所用的验证码 */
const reqRegisterCode = (email) => {
  return request({
    method: 'POST',
    url: '/api/user/passport/code',
    data: {
      email
    }
  })
}

/* 注册和登录调用的接口--如果已经注册过了，就返回直接登录的信息以及token，第一次注册直接注册成功并返回token */
const reqRequestLogin = ({ email, code }) => {
  return request({
    method: 'POST',
    url: '/api/user/passport/register',
    data: {
      email,
      code
    }
  })
}

/* 根据token获取用户的个人信息 */
const reqUserInfo = () => {
  return request({
    method: 'GET',
    url: '/my/userinfo'
  })
}

/* 退出登录使用的接口 */
const reqLogout = (...params) => {
  return request({
    method: 'GET',
    url: '/api/user/passport/logout',
    params: params
  })
}

/* 发表文章的接口 */
const reqPublishArtical = (articalInfo) => {
  return request({
    method: 'POST',
    url: '/artical/publish',
    data: articalInfo
  })
}

/* 搜索文章的接口 */
const reqSearchArticalList = (keyword) => {
  return request({
    method: 'GET',
    url: '/api/list/artical',
    query: {
      keyword
    }
  })
}

/* 获取某个用户的文章列表 */
const reqUserArticalList = (id) => {
  return request({
    method: 'GET',
    url: '/my/user/artical/' + id
  })
}

/* 修改个人信息 */
/* 不用携带id，id可以从token中获取 */
const changePersonalMsg = (data) => {
  return request({
    method: 'POST',
    url: '/my/user/edituserinfo',
    data: {
      ...data
    }
  })
}

/* 修改头像的请求 */
const changeHeaderImg = (formData) => {
  return request({
    method: 'POST',
    url: '/my/user/edituserinfo/header',
    data: formData
  })
}

/* 发表评论 */
const sendComment = (data) => {
  return request({
    method: 'POST',
    url: '/artical/commentartical',
    data: {
      ...data
    }
  })
}

/* 点赞文章 */
const likeArtical = (id) => {
  return request({
    method: 'GET',
    url: `/artical/likeartical/${id}`
  })
}

/* 发表沸点 */
const pinsPublish = (data) => {
  return request({
    method: 'POST',
    url: '/pins/publish',
    data
  })
}

/* 获取沸点列表 */
const getPinsList = () => {
  return request({
    method: 'GET',
    url: '/api/pinslist'
  })
}

export {
  getArticalDetail,
  getArticleRecommendList,
  reqRegisterCode,
  reqRequestLogin,
  reqUserInfo,
  reqLogout,
  reqPublishArtical,
  reqSearchArticalList,
  reqUserArticalList,
  changePersonalMsg,
  sendComment,
  likeArtical,
  pinsPublish,
  getPinsList,
  changeHeaderImg
}