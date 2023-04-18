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

export {
  getArticalDetail,
  getArticleRecommendList,
  reqRegisterCode,
  reqRequestLogin,
  reqUserInfo
}