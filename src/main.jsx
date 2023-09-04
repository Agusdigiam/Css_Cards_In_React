import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './components/Main/Main.jsx'
import Cards from './components/Cards/Cards.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main/>
    <Cards/>
  </React.StrictMode>,
)
