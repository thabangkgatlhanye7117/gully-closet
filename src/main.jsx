import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'
import './styles/layout.css'
import Layout from './Layout.jsx'
import HomePage from './pages/HomePage'
import 'remixicon/fonts/remixicon.css'

const router = createBrowserRouter([
{
  path: "/", element: <Layout/>,
  children : [
    { index: true , element: <HomePage/> },
  ]

}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
