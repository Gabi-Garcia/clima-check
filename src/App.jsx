/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */

import './App.css'
import { NavLink, Outlet } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars



function App() {
  
  return (
    <>
    <div className='App'>
          <header>
            <div className='nav'>
              <nav>
                <NavLink className="navLink" to="">Clima en mi Ubicación</NavLink>
                <NavLink  className="navLink" to="TiempoCincoDíasEnMiUbicación ">Clima Cinco Días En Mi Ubicación </NavLink>
                <NavLink  className="navLink" to="TiempoActualCincoCiudades">Clima Actual Ciudades</NavLink>
                <NavLink className="navLink" to="PrevisiondDelTiempoCincoDíasEnCiudadSeleccionada">Clima Cinco Días En Ciudades</NavLink>
              </nav>
            </div>
          </header>
          <main>
            <Outlet></Outlet>
          </main>
    </div>
    </>
  )
}

export default App
