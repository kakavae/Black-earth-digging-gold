import { useState } from "react"

const useUserinfo = () => {
  const [userInfo, setUserInfo] = useState({})
  const changeUserinfo = (userif) => {
    setUserInfo(userif)
  }
  return {
    userInfo,
    changeUserinfo
  }
}

export {
  useUserinfo
}