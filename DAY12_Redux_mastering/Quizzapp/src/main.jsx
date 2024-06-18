import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import { stores } from './redux/store.js'
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={stores}>
   <App />
 </Provider>
  
  </BrowserRouter>
 
  



 
 
)
