/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

const GeoLocationComponent = () => {
  useEffect(() => {
    // Verificar si el navegador soporta la geolocalización
    if ("geolocation" in navigator) {
      // Intentar obtener la posición del usuario
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Aquí manejas la posición si se obtiene correctamente
          console.log("Posición obtenida:", position);
        },
        (error) => {
          // Aquí manejas los errores al intentar obtener la posición
          console.error("Error al obtener la posición:", error);

          // Mostrar un mensaje al usuario indicando que debe activar la geolocalización
          if (error.code === error.PERMISSION_DENIED) {
            alert("Por favor, activa la geolocalización para utilizar la aplicación");
          }
        }
      );
    } else {
      // El navegador no soporta la geolocalización
      alert("Tu navegador no soporta la geolocalización. Por favor, utiliza un navegador compatible.");
    }
  }, []); // El segundo argumento [] asegura que este efecto solo se ejecute una vez al montar el componente

  return (
    <div>
     
    </div>
  );
};

export default GeoLocationComponent;
