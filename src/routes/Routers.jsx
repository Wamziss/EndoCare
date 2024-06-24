import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Blogs from '../pages/Blogs/Blogs'
import BlogDetails from '../pages/Blogs/BlogDetails'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Donations from '../pages/Donations'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/blogs/:id' element={<BlogDetails/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/donations' element={<Donations/>}/>
    </Routes>
  )
}

export default Routers
