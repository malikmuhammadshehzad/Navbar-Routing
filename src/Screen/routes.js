import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import SignUp from './SignUp'
 

function AppRouter() {
  return (
     <>
     <BrowserRouter>
   <Routes>
       
        <Route path='/sigUp' element={<SignUp/>} />
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
       </Route>
   </Routes>
   </BrowserRouter> 
     </>
  )
}

export default AppRouter