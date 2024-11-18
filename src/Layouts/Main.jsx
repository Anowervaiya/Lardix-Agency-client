import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'

import Footer from '../Shared/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='min-h-screen'>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Main