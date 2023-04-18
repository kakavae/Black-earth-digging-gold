/* 
  功能：
  1.返回一个promise，promise成功的回调拿到服务器返回的数据，需要失败捕获
  2.函数接收一个对象，对象规定请求方式get/post，请求的url，
  3.携带请求需要携带的数据，数据可以是get方式的url参数，按照顺序写在一个数组
  4.post数据，暂定
*/
import requestGET from "./requestGET"
const mainURL = 'http://127.0.0.1:8090/api/'

const request = ({ method, url, params = [], query = {} }) => {

  url = mainURL + url  // 拼接主路径

  /* 给每一个请求都配置服务器对应的请求路径 */
  if (method === 'get' || method === 'GET') {
    return requestGET({ method, url, params, query })
  } else if (method === 'post' || method === 'POST') {
    return 'post'
  } else {
    throw new Error('This request method is not supported !!!')
  }
}

export default request