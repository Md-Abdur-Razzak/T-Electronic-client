import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './componets/Router/Router'
import Authprovider from './componets/Router/Authprovider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={myRouter}></RouterProvider>
    </Authprovider>
    <ToastContainer />
    
  </React.StrictMode>,
)
