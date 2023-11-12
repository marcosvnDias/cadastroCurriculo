import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {PageQuestion1} from './components/PageQuestion1.jsx'
import { PageQuestion2 } from './components/PageQuestion2.jsx'
import { PageQuestion3 } from './components/PageQuestion3.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/pageQuestion1",
    element: <PageQuestion1/>
  },
  {
    path: "/pageQuestion2",
    element: <PageQuestion2/>
  },
  {
    path: "/pageQuestion3",
    element: <PageQuestion3/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
