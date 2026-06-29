import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

// In ?fast preview mode, disable entrance animations before React mounts so
// child effects (reveal/count-up) see the flag synchronously.
if (/[?&]fast\b/.test(location.search)) document.body.classList.add('preview')

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
