import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Component from './component.jsx'



function CustomApp() {
  const name = "React";
  return (
    <>
    <h1>hiii {name}</h1>
    </>
  )
}


createRoot(document.getElementById('root')).render(
  <CustomApp/> 
)
