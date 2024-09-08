import React from 'react'
import Header from '../Header'
import Footer from '../footer'

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <div>{children}</div>
      <Footer/>
    </div>
  )
}

export default Layout
