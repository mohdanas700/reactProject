import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Table from './components/table.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Table user1 = "ABC" user2 = "DEF" />
    <Table user1 = "GHI" user2 = "JKL"/>
  </StrictMode>,
)
