/* App组件向下传递的context */
import { createContext } from "react";

export const isDisplayContext = createContext(true) // header消失，则左边的菜单就固定定位(true)