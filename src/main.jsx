import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
{
  path: "/", element: "Layout",
  children : [
    {/*index: true , element: ,<HomePage/> */},
  ]

}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
