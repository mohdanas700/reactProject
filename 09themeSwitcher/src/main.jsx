import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// In this project contextapi is used in different way not like 08minicontext proj
// Here in context folder have theme.js and no other file is made for making ThemeContextProvider seperately.
// In theme.js file variable and themecontextProvider is declared
