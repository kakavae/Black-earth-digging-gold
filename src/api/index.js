import request from "./request";

/* 给所有的请求添加请求头应该放在这里 */

const getArticalDetail = (id = 1) => {
  return request({
    method: 'GET',
    url: 'artical/' + id
  })
}

export {
  getArticalDetail
}