/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */

import './App.css'
import { NavLink, Outlet } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Footer from '../src/components/Footer/Footer';
import { Navbar } from '../src/components/Navbar/Navbar';// eslint-disable-next-line no-unused-vars



function App() {
  
  return (
    <>
    <div className='App'>
          <header>
            <Navbar />
          </header>
          <main>
            <Outlet></Outlet>
          </main>
    </div>
          <Footer />
    </>
  )
}

export default App
