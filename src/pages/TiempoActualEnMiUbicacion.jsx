/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import GeoLocationComponent from '../components/GeoLocationComponent';
import '../styles/tiempoActual.css'


const TiempoActualEnMiUbicacion = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Verificar si se tiene la ubicación completa
    if (location.lat !== null && location.lon !== null) {
      // Construir la URL para la API de OpenWeather
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=ecce75668fb512c7b4b22a15d930fb7e&units=metric`;
      // Realizar la solicitud a la API de OpenWeather
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => setWeatherData(data))
        .catch(error => console.error('Error al buscar datos:', error));
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
    <div> 
      <GeoLocationComponent />
      <h1>Weather App</h1>
      {weatherData && (
        <div className='tiempoActual'>
          <h2>Clima actual en {weatherData.name}</h2>
          <p>Temperatura: {Math.round(weatherData.main.temp)}°C</p>
          <p>Clima: {weatherData.weather[0].main}</p>
          <p>País: {weatherData.sys.country}</p>
          <p>Ciudad: {weatherData.name}</p>
          <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.name} onError={(e) => console.error("Error al cargar la imagen:", e)}/>
          {/* Otros detalles del clima pueden ser mostrados aquí */}
        </div>
      )}
    </div>
  );
};

export default TiempoActualEnMiUbicacion ;
