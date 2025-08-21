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
import BottomsPage from './pages/BottomsPage.jsx'
import SweaterPage from './pages/SweaterPage.jsx'
import TshirtsPage from './pages/TshirtsPage.jsx'
import CapsPage from './pages/CapsPage.jsx'
import FleecePage from './pages/FleecePage.jsx'

import 'remixicon/fonts/remixicon.css'

const router = createBrowserRouter([
{
  path: "/", element: <Layout/>,
  children : [
    { index: true , element: <HomePage/> },
    { path: "about" , element: <AboutPage/> },
    { path: "jackets" , element: <JacketsPage/> },
    { path: "bottoms" , element: <BottomsPage/> },
    { path: "sweaters" , element: <SweaterPage/> },
     { path: "tshirts" , element: <TshirtsPage/> },
     { path: "caps" , element: <CapsPage/> },
     { path: "fleece" , element: <FleecePage/> },

  ]

}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
