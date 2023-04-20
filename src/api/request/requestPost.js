/* 处理POST请求 */

const requestPOST = ({ method, url, data = null, useBefore = () => { } }) => {
  console.log(method, url, data)
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)

    xhr.addEventListener('load', () => {
      resolve(JSON.parse(xhr.responseText))
    })

    xhr.addEventListener('error', (e) => {
      reject({
        msg: '请求出错',
        detail: e
      })
    })

    xhr.addEventListener('abort', () => {
      reject({
        msg: '请求被打断，用户取消接收'
      })
    })

    /* 添加请求拦截器 */
    useBefore(xhr)  // 你传入的那个函数在形参的位置就能收到xhr对象
    const token = window.localStorage.getItem('token')
    if (token) {
      xhr.setRequestHeader('Authorization', token)
    }

    /* 如果是字符串就url-encoded格式的数据 */
    if (typeof data === 'string') {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.send(data)
    } else if (typeof data === 'object' && data) {
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
      xhr.send(JSON.stringify(data))
    } else {
      xhr.send()
    }
  })
}

export default requestPOST