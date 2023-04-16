import useMenuList from "../navLeft";
import { useState } from "react";
/* 下划线显示与否的钩子--可以从另外一个hook里面拿 */
import useNotifacationList from "../headerImgMemberNotifacation";

const useHeaderList = (initialListState, initialNum = 0) => {
  /* 只用到这个钩子的设置和改变点击时候的样式 */
  const { focuseId, turnMenu } = useMenuList(initialListState, initialNum)
  // 下划线的定位
  const [bottomLineLeft, setBottomLineLeft] = useState('0px')
  // 控制下划线显示与否 返回的是函数，只要调用就会控制显示与隐藏，不用传参数
  const { isDisplay, display, noDisplay } = useNotifacationList()

  // 控制下划线显示--同时移动线的位置
  const moveBootomLine = (event) => {
    const index = event.target.dataset.index
    display()
    // a和li的宽度一样，所以直接用a的
    setBottomLineLeft(index * event.target.offsetWidth + 'px')
  }

  return {
    focuseId,
    turnMenu,
    bottomLineLeft,
    isDisplay,
    moveBootomLine,
    noDisplay,
  }
}

export default useHeaderList