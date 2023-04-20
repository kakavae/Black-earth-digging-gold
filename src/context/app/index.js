/* App组件向下传递的context */
import { createContext } from "react";

/* 这只是按需导出的时候会使用到的名字而已，没有任何特殊含义 */
export const isDisplayContext = createContext({}) // header消失，则左边的菜单就固定定位(true)