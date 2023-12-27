/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */

import './App.css'
import { NavLink, Outlet } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
// eslint-disable-next-line no-unused-vars



function App() {
  
  return (
    <>
    <div className='App'>
          <header>
            <div className='nav'>
              <nav>
                <NavLink className="navLink" to="">Clima</NavLink>
                <NavLink  className="navLink" to="TiempoCincoDíasEnMiUbicación ">Previsión por cinco días</NavLink>
                <NavLink  className="navLink" to="TiempoActualCincoCiudades">Ciudades</NavLink>
                <NavLink className="navLink" to="PrevisiondDelTiempoCincoDíasEnCiudadSeleccionada">Previsión cinco días en Ciudades</NavLink>
              </nav>
            </div>
          </header>
          <main>
            <Outlet></Outlet>
          </main>
          <Footer />
    </div>
    </>
  )
}

export default App
