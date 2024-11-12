/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import GeoLocationComponent from '../../components/GeoLocationComponent';
import '../../pages/TiempoActualEnMiUbicacion/TiempoActualEnMiUbicacion.css'
import convertirUnixATiempo from '../../components/ConvertirUnixATiempo';
import MySpinner from '../../components/Spinner/Spinner';


const TiempoActualEnMiUbicacion = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [weatherData, setWeatherData] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar si se tiene la ubicación completa
    if (location.lat !== null && location.lon !== null) {
      // Construir la URL para la API de OpenWeather
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=ecce75668fb512c7b4b22a15d930fb7e&units=metric&lang=es`;
      // Realizar la solicitud a la API de OpenWeather
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => 
          {setWeatherData(data);
           setIsLoading(false);
          })
        .catch(error =>{ 
        console.error('Error al buscar datos:', error);
        setIsLoading(false);
    });
    }
  }, [location]);

  // Función para obtener la geolocalización del usuario
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      }, error => console.error('Error getting location:', error));
    } else {
      console.error('Geolocation is not supported by this browser.');
    
    }
  };

  // Cargar la geolocalización al cargar la aplicación
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <> 
      <GeoLocationComponent /> 
      <h1>Clima Check</h1>
      {isLoading ? (
        <MySpinner /> // Muestra el spinner mientras isLoading sea true
      ) : (
        weatherData && (
          <>
            <div className='nombreDeCiudadActual'> 
              <h3>Clima actual en </h3>    
              <h2>{weatherData.name}</h2>      
            </div>
            <div className='tiempoActual'>
              <div className='cajaIzquierda'>
                <div className='appImage'>
                  <img src="/Black Couple Outdoors 1.png" alt="appImage" />
                </div>
                <div className='cajaInferior'>
                  <p>{Math.round(weatherData.main.temp)}°C</p>
                  <p>{weatherData.name}</p>
                  <p>País: {weatherData.sys.country}</p>
                  <div className='imgBox'>
                    <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.name} onError={(e) => console.error("Error al cargar la imagen:", e)} />
                  </div>
                </div>
                <NavLink className="navLink" to="TiempoCincoDiasEnMiUbicacion">Previsión por cinco días</NavLink>
              </div>
              
              <div className='cajaTextoLateral'>
                <p>Temperatura: {Math.round(weatherData.main.temp)}°C</p>
                <p>Sensación térmica: {Math.round(weatherData.main.feels_like)}°C</p>
                <p>Temperatura mínima: {Math.round(weatherData.main.temp_min)}°C</p>
                <p>Temperatura máxima: {Math.round(weatherData.main.temp_max)}°C</p>
                <p>Humedad: {weatherData.main.humidity}%</p>
                <p>Presión Atmosférica: {weatherData.main.pressure} hPa</p>
                <p>Amanecer: {convertirUnixATiempo(weatherData.sys.sunrise)}</p>
                <p>Atardecer: {convertirUnixATiempo(weatherData.sys.sunset)}</p>
                <p>Visibilidad: {Math.round(weatherData.visibility / 1000)} km</p>
                <p>Descripción: {weatherData.weather[0].description}</p>
                <p>Nubosidad variable: {weatherData.clouds.all}%</p>
              </div>
            </div>
          </>
        )
      )}
    </>
  );
};

export default TiempoActualEnMiUbicacion;
