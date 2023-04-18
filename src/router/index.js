import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../component/home";
import Pins from "../component/pins";
import Course from '../component/course'
import Live from '../component/live'
import Events from '../component/events'
import Challenge from '../component/challenge'

/* 文章组件 */
import Artical, { loader as articalLoader } from "../component/artical";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '',
        element: <Home></Home>
      },
      // home主页的所有组件
      {
        path: 'following',
        element: <Home></Home>
      },
      {
        path: 'recommended',
        element: <Home></Home>
      },
      {
        path: 'backend',
        element: <Home></Home>
      },
      {
        path: 'frontend',
        element: <Home></Home>
      },
      {
        path: 'android',
        element: <Home></Home>
      },
      {
        path: 'ios',
        element: <Home></Home>
      },
      {
        path: 'ai',
        element: <Home></Home>
      },
      {
        path: 'freebie',
        element: <Home></Home>
      },
      {
        path: 'career',
        element: <Home></Home>
      },
      {
        path: 'article',
        element: <Home></Home>
      },
      // 上方header点击之后显示不同的组件
      {
        path: 'pins',
        element: <Pins></Pins>
      },
      {
        path: 'course',
        element: <Course></Course>
      },
      {
        path: 'live',
        element: <Live></Live>
      },
      {
        path: 'events',
        element: <Events></Events>
      },
      {
        path: 'challenge',
        element: <Challenge></Challenge>
      },
      // 文章组件
      {
        path: 'post/:id',
        element: <Artical></Artical>,
        loader: articalLoader,
      }
    ]
  }
])

export default router