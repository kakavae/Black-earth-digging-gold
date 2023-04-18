/* 处理get方法 */
/* 函数调用返回的是Promise对象 */
const requestGET = ({ method, url, params = [], query = {}, useBefore = () => { } }) => {

  /* 输入校验 */
  if (!method || !url) {
    throw new Error('请输入正确的请求方法和路径')
  }
  if (!Array.isArray(params)) {
    throw new Error('params must be the instance of Array')
  }
  if (Object.prototype.toString.call(query).split('').slice(8, 14).join('') !== 'Object') {
    throw new Error('query must be the instance of Object')
  }

  /* 输入拷贝 */
  params = [...params]
  query = { ...query }

  /* 处理params参数 */
  const processURL = (url, params) => {
    return params.reduce((pre, cur) => {
      return pre + '/' + cur
    }, url)
  }

  /* 处理query参数 */
  const precessQuery = (url, query) => {
    /* ?xx=xx&xx=xx&yy=yy */
    const str = Object.entries(query).reduce((pre, cur) => {
      return pre + cur[0] + '=' + cur[1] + '&'
    }, url + '?')
    return str.slice(0, str.length - 1)
  }

  /* 给每一个请求都配置服务器对应的请求路径 */
  if (method === 'get' || method === 'GET') {

    /* 路径拼接params */
    if (params.length > 0) {
      url = processURL(url, params)
    }
    /* 路径拼接query */
    if (Object.keys(query).length > 0) {
      url = precessQuery(url, query)
    }

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method.toUpperCase(), url, true)

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

      useBefore(xhr)

      xhr.send()
    })
  }
}

export default requestGET
