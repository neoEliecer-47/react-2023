import React from 'react'
import ReactDOM from 'react-dom/client'


import {router} from './router'
import {RouterProvider} from 'react-router-dom'
import UserProvider from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserProvider>
          <RouterProvider router={router}/>  {/*encerramos todo en un provedor para que ese prop se pueda pasar a la configuracion de nuestras paginas*/}
      </UserProvider>
  </React.StrictMode>,
)
