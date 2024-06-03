import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Todoprovider from './context/Todocontext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
     <Todoprovider>
     <App />
     </Todoprovider>
  

  
);
