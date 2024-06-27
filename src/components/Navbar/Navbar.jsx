/* eslint-disable no-unused-vars */

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../components/Navbar/Navbar.css';

export const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 767) {
        setIsNavVisible(true);
    }
};

window.addEventListener('resize', handleResize);
    
    // Check initial window width
    if (window.innerWidth >= 767) {
      setIsNavVisible(true);
    }

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

const handleBurguerClick = () => {
    setIsNavVisible(!isNavVisible);
    console.log('click')
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 767) {
      setIsNavVisible(false);
    }
  };

  return (
    <>
      <div className="burguer">
        <button className="navbar-burguer" id="js-navbar-burguer" onClick={handleBurguerClick}>
          <img src="/menu-principal.png" alt="Burguer icon" />
        </button>
        <h2 className='h2-burguer'>CLIMA CHECK</h2>
      </div>
      <nav className='nav'>
        <ul className={`main-nav ${isNavVisible ? 'visible' : 'hidden'}`} id="js-menu">
          <li>
            <NavLink className="nav-links" to="" onClick={handleLinkClick}>Clima</NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="TiempoCincoDiasEnMiUbicacion" onClick={handleLinkClick}>Previsión por cinco días</NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="TiempoActualCincoCiudades" onClick={handleLinkClick}>Ciudades</NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="PrevisionDelTiempoCincoDiasEnCiudadSeleccionada" onClick={handleLinkClick}>Previsión cinco días en Ciudades</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
