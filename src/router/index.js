import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../component/home";
import Pins from "../component/pins";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '',
        element: <Home></Home>
      },
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
      {
        path: 'pins',
        element: <Pins></Pins>
      }
    ]
  }
])

export default router