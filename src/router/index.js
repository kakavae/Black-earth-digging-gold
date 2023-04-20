import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../component/home";
import { loader as homeArticleListLoader } from '../common/homeMainContent/recommondUpdate'
import Pins from "../component/pins";
import Course from '../component/course'
import Live from '../component/live'
import Events from '../component/events'
import Challenge from '../component/challenge'
import Creator from "../component/creator";
import CreatorHome from "../component/creator/creatorHome";
import Editor from "../component/editor";

/* 文章组件 */
import Artical, { loader as articalLoader } from "../component/artical";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '',
        loader: homeArticleListLoader,
        element: <Home></Home>
      },
      // home主页的所有组件
      {
        path: 'following',
        loader: homeArticleListLoader,
        element: <Home></Home>
      },
      {
        path: 'recommended',
        loader: homeArticleListLoader,
        element: <Home></Home>
      },
      {
        path: 'backend',
        loader: homeArticleListLoader,
        element: <Home></Home>
      },
      {
        path: 'frontend',
        loader: homeArticleListLoader,
        element: <Home></Home>
      },
      {
        path: 'android',
        loader: homeArticleListLoader,
        element: <Home></Home>
      },
      {
        path: 'ios',
        loader: homeArticleListLoader,
        element: <Home></Home>
      },
      {
        path: 'ai',
        loader: homeArticleListLoader,
        element: <Home></Home>
      },
      {
        path: 'freebie',
        loader: homeArticleListLoader,
        element: <Home></Home>
      },
      {
        path: 'career',
        loader: homeArticleListLoader,
        element: <Home></Home>
      },
      {
        path: 'article',
        loader: homeArticleListLoader,
        element: <Home></Home>
      },
      // 上方header点击之后显示不同的组件--课程 直播 沸点
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
        loader: articalLoader,
        element: <Artical></Artical>,
      },
      /* 创作者中心 */
      {
        path: 'creator',
        element: <Creator></Creator>,
        children: [
          {
            path: 'home',
            element: <CreatorHome></CreatorHome>
          }
        ]
      },
      /* 写文章 */
      {
        path: 'editor',
        element: <Editor></Editor>
      }
    ]
  }
])

export default router