import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// 1) Pehle context create krte hai 
// 2)Component contextProvider ka banana hota hai usme context provider name se tag banate hai usme acces hota hai children ka, or provider ko btana hota hai k kaunsi value children access krega
// 3)contextProvider me jo children hota hai wo components hote hai jo value access krte provider se.
// 4)value sent ya receive krne k liye useContext() hool use hota hai jisme pass krna hota hai contextprovider js file ,yaha contextProvder js file k through contextProvider jsx file se value manupulate hoti hai jo ki us k children access krte hai. 