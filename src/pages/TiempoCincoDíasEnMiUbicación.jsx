/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import '../styles/tiempoCincoDías.css'
import obtenerNombreDia from '../components/ObtenerNombreDía';
import convertirUnixATiempo from '../components/ConvertirUnixATiempo';



const TiempoCincoDiasEnMiUbicacion = () => {
  const [location, setLocation] = useState({ lat: null, lon: null }); 
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Verificar si se tiene la ubicación completa
    if (location.lat !== null && location.lon !== null) {
      // Construir la URL para la API de OpenWeather
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=ecce75668fb512c7b4b22a15d930fb7e&units=metric&lang=es`;
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
       <h1>Clima Check</h1>
        <img src="/Black Couple Outdoors 1.png" alt="appImage" />
        {weatherData && weatherData.list && (
          <div className='cincoDiasCaja'>
          <h2>Previsión por cinco días en {weatherData.city.name}</h2>
            {weatherData.list.slice(0, 5).map((forecast, index) => (
              <div key={index} className='cincoDias'>
                <div className='cajaLateral'>
                <p>Día {obtenerNombreDia(index)}</p>
                <p>Temperatura: {Math.round(forecast.main.temp)}°C</p>
                <p>Sensación térmica: {Math.round(forecast.main.feels_like)}°C</p>
                <p>Temperatura mínima: {Math.round(forecast.main.temp_min)}°C</p>
                <p>Temperatura máxima: {Math.round(forecast.main.temp_max)}°C</p>
                <p>Pres. Atmosférica: {forecast.main.pressure}hPa</p>
                <p>Descripción: {forecast.weather[0].description}</p>
                <p>Nubosidad variable: {forecast.clouds.all}%</p>
                <p>Humedad: {forecast.main.humidity}%</p>
                <p>Visibilidad: {Math.round(forecast.visibility / 1000)} km</p>
                {/* <p>Clima: {forecast.weather[0].main}</p> */}
                {/* <p>País: {weatherData.city.country}</p>
                <p>Ciudad: {weatherData.city.name}</p> */}
                <img
                  src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                  alt={forecast.weather[0].description}
                  onError={(e) => console.error("Error al cargar la imagen:", e)}
                />
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default TiempoCincoDiasEnMiUbicacion;