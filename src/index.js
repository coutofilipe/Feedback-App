import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

// React 17 version:
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById('root')
// );
