import { createBrowserRouter } from "react-router-dom";
import App, { loader as appLoader } from '../App'
import Home from "../component/home";
import { loader as homeArticleListLoader } from '../common/homeMainContent/recommondUpdate'
import Pins from "../component/pins";
import Course from '../component/course'
import Live from '../component/live'
import Events from '../component/events'
import Challenge from '../component/challenge'
import Creator from "../component/creator";
import CreatorHome from "../component/creator/creatorHome";
import Editor, { action as publishAction } from "../component/editor";
import PersonalHomepage, { loader as personalHomepageLoader } from "../component/personalHomepage";
import EditorPersonalMsg, { action as editorPersonalMsgAction } from "../component/personalHomepage/editorPersonalMsg";
import { action as logoutAction } from "../common/header/headerImgMemberNotification/headerImgMember/individualCenter";
import { action as loginAction } from "../common/loginRegister";
import { action as commentAction } from '../component/artical/articalMiddleContent/articalComment'

/* 文章组件 */
import Artical, { loader as articalLoader } from "../component/artical";

const router = createBrowserRouter([
  {
    path: '/',
    loader: appLoader,
    action: logoutAction,
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
        action: commentAction,
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
        action: publishAction,
        element: <Editor></Editor>
      },
      /* 跳转到个人主页 */
      {
        path: 'user/:userId',
        loader: personalHomepageLoader,
        element: <PersonalHomepage></PersonalHomepage>,
        children: [

        ]
      },
      /* 修改个人信息 */
      {
        path: 'user/settings/profile',
        action: editorPersonalMsgAction,
        element: <EditorPersonalMsg></EditorPersonalMsg>
      }
    ]
  }
])

export default router