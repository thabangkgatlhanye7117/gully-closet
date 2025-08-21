import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'
import './styles/layout.css'
import './styles/home.css'
import './styles/about.css'
import './styles/components.css'
import Layout from './Layout.jsx'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import JacketsPage from './pages/JacketsPage'

import 'remixicon/fonts/remixicon.css'

const router = createBrowserRouter([
{
  path: "/", element: <Layout/>,
  children : [
    { index: true , element: <HomePage/> },
    { path: "about" , element: <AboutPage/> },
    { path: "jackets" , element: <JacketsPage/> },

  ]

}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
