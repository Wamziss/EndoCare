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

// Dashboard
import Dashboard from '../Components/Dashboard/Home'
import App from '../App'
import Records from '../Components/Dashboard/Records'
import Health from '../Components/Dashboard/Health'
import Community from '../Components/Dashboard/Community'
import Saved from '../Components/Dashboard/Saved'

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
      
      {/* Dashboard Routes */}
      <Route path='/home' element={<Dashboard/>}/>
      <Route path='/records' element={<Records/>}/>
      <Route path='/health' element={<Health/>}/>
      <Route path='/community' element={<Community/>}/>
      <Route path='/saved' element={<Saved/>}/>
      
    </Routes>
  )
}

export default Routers
