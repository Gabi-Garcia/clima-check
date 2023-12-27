/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import'../styles/tiempoCiudades.css'


export const TiempoActualCincoCiudades = () => {
  // Arreglo de ciudades
  const ciudades = ['Buenos Aires', 'Nueva York', 'Londres', 'Tokio', 'Sidney', 'Barcelona', 'Santiago de Chile', 'Lima', 'Helsinki'];

  // Estado para almacenar la ciudad seleccionada
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState(ciudades[0]);
  const [weatherData, setWeatherData] = useState(null);


  useEffect(() => {
    // Verificar si se tiene la ubicación completa
    if (ciudadSeleccionada) {
      // Construir la URL para la API de OpenWeather
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudadSeleccionada}&appid=ecce75668fb512c7b4b22a15d930fb7e&units=metric`;
      // Realizar la solicitud a la API de OpenWeather
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => setWeatherData((data)))
      .catch(error => console.error('Error al buscar datos:', error)); 
     
       console.log('API url: ', apiUrl)
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ciudadSeleccionada]);
    useEffect(() => {
    }, []);
  // Manejador de cambio de ciudad
  const handleChangeCiudad = (event) => {
    setCiudadSeleccionada(event.target.value);
    console.log('Ciudad seleccionada: ', event.target.value)
  };
  return (
    <> 
      <div>
      <h1>Clima Check</h1>
        <h2>Elije una Ciudad para ver su Clima Actual</h2>
        <select className='select' value={ciudadSeleccionada} onChange={handleChangeCiudad}>
          {/* Mapear sobre el arreglo de ciudades para generar las opciones del select */}
          {ciudades.map((ciudad) => (
            <option key={ciudad} value={ciudad}>
              {ciudad}
            </option>
          ))}
        </select>
        {weatherData && ( 
        <div className='tiempoCiudades'>
            <div className='appImage'>
                <img src="/Black Couple Outdoors 1.png" alt="appImage" />
            </div>
            <div className='cajaInferior'>
                <p>{ciudadSeleccionada}</p>
                <p>{Math.round(weatherData.list[0].main.temp)}°C</p>
                <div className='imgBox'>
                    <img
                      src={`http://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`}
                      alt={weatherData.city.name}
                      onError={(e) => console.error("Error al cargar la imagen:", e)}
                    />   
                </div>
            <NavLink className="navLink" to="/PrevisiondDelTiempoCincoDíasEnCiudadSeleccionada">Previsión cinco días en Ciudades</NavLink>
            </div>
            <div className='cajaTextoLateral'>
              <p>Clima: {weatherData.list[0].weather[0].main}</p>
              <p>País: {weatherData.city.country}</p>
              <p>Ciudad: {weatherData.city.name}</p>
            </div>
        </div>
        )}
      </div>
      
    </>
  )
          }
  
    


export default TiempoActualCincoCiudades;

