import { useState } from "react"

const useMenuFocuse = () => {
  const [focuseId, setFocuseId] = useState('')
  const changeFocuse = (event) => {
    setFocuseId(event.target.dataset.id)
  }
  return {
    focuseId,
    changeFocuse
  }
}

export default useMenuFocuse