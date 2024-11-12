/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Spinner.css';


const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula el tiempo de carga de la página
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='cajaSpinner'>
        <p>Cargando...</p>
            {isLoading ? (
        <div className="spinner"></div>
      ) : (
            <p>PINGüINOS DE PUNTA</p>
      )}
    </div>
  );
};

export default MyComponent;
