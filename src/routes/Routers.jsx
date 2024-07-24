import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/LandingPage/pages/Home'
// import Blogs from '../pages/Blogs/Blogs'
import BlogDetails from '../Components/LandingPage/Blogs/BlogDetails'
import Login from '../Components/LandingPage/pages/Login'
import SignUp from '../Components/LandingPage/pages/SignUp'
// import Services from '../pages/Services'
// import Contact from '../pages/Contact'
import Donations from '../Components/LandingPage/Donations'



const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='#blogs/:id' element={<BlogDetails/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/donations' element={<Donations/>}/>
      
    </Routes>
  )
}

export default Routers
