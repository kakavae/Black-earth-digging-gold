/* 用于给pins模块处理数据 */
export const proPinsList = (listArr = []) => {
  const newArr = []
  listArr.forEach((item) => {
    let {
      id, content, userId, userName, occupation, headerImgUrl, likes, commentImg, time
    } = item

    let newTime = Math.ceil((Date.now() - time) / (1000 * 60)) // 分钟
    if (newTime <= 60) {
      newTime = newTime + '分钟前'
    } else if (newTime > 60 && newTime < 60 * 24) {
      newTime = Math.floor(newTime / 60) + '小时前'
    } else if (newTime >= 60 * 24) {
      const timeObj = new Date(time)
      newTime = timeObj.getFullYear() + '-' + (timeObj.getMonth() * 1 + 1) + '-' + timeObj.getDate()
    }

    newArr.push({
      id,
      userId,
      userName,
      occupation,
      headerImgUrl: headerImgUrl ? headerImgUrl : '',
      time: newTime,
      contentInfo: {
        content,
        likes,
        commentImg: Array.isArray(commentImg) ? commentImg : []
      }
    })
  })
  return newArr
}