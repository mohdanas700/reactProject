import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { About, ContactUs, Github, Home,User } from './components'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Root from './Root'
import { githubInfoLoader } from './components/Github/Github'

// const router  = createBrowserRouter([
//   {
//     path:"/",
//     element:<Root/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path:"contactus",
//         element: <ContactUs />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} /> 
      <Route path='contactus' element={<ContactUs />} /> 
      <Route path='user/:userid' element={<User />} /> 
      <Route path='github' element={<Github />} /> 
      <Route loader={
        
      }  path='github' element={<Github />} /> 

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
