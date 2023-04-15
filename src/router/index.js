import { createBrowserRouter, Navigate } from "react-router-dom";
import App from '../App'
import HomeMainContent from "../common/homeMainContent";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '',
        element: <HomeMainContent></HomeMainContent>
      },
      {
        path: 'following',
        element: <HomeMainContent></HomeMainContent>
      },
      {
        path: 'recommended',
        element: <HomeMainContent></HomeMainContent>
      },
      {
        path: 'backend',
        element: <HomeMainContent></HomeMainContent>
      },
      {
        path: 'frontend',
        element: <HomeMainContent></HomeMainContent>
      },
      {
        path: 'android',
        element: <HomeMainContent></HomeMainContent>
      },
      {
        path: 'ios',
        element: <HomeMainContent></HomeMainContent>
      },
      {
        path: 'ai',
        element: <HomeMainContent></HomeMainContent>
      },
      {
        path: 'freebie',
        element: <HomeMainContent></HomeMainContent>
      },
      {
        path: 'career',
        element: <HomeMainContent></HomeMainContent>
      },
      {
        path: 'article',
        element: <HomeMainContent></HomeMainContent>
      }
    ]
  }
])

export default router