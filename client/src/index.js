import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UserStore from './store/UserStore'
import DeviceStore from './store/DeviceStore'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Context = createContext(null)

const contextProviderValues = {
  user: new UserStore(),
  device: new DeviceStore()
}

ReactDOM.render(
  <Context.Provider value={ contextProviderValues }>
    <App/>
  </Context.Provider>,
  document.getElementById('root')
)
