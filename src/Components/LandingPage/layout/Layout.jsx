import React from 'react'

import Header from '../Header/Header'
import Routers from '../../../routes/Routers'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
      <Header/>
      <main className='flex-grow'>
        <Routers />
      </main>
      <Footer/>
    </>
  )
}

export default Layout
