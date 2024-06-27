/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import'../../pages/PrevisionDelTiempoCincoDiasEnCiudadSeleccionada/PrevisionDelTiempoCincoDiasEnCiudadSeleccionada.css'
import obtenerNombreDia from '../../components/ObtenerNombreDía';

export const PrevisionDelTiempoCincoDiasEnCiudadSeleccionada = () => {
  // Array de ciudades
  const ciudades = ['Barcelona','Ámsterdam', 'Ankara', 'Auckland', 'Berlín', 'Bogotá', 'Brisbane', 'Brasilia', 'Buenos Aires', 'Canberra', 'Ciudad de Belice',
  'Ciudad de Guatemala', 'Ciudad de México', 'Doha', 'Honolulu', 'Jerusalén', 'La Habana', 'Lima', 'Lisboa', 'Londres', 'Madrid',
  'Managua', 'Melbourne', 'Nouméa', 'Nueva Delhi', 'Ottawa', 'Panamá', 'París', 'Pekín', 'Port Moresby', 'Quetzaltenango', 'Riyadh',
  'Roma', 'San José', 'San Pedro Sula', 'San Salvador', 'Santiago', 'Sídney', 'Suva', 'Tegucigalpa', 'Teherán', 'Tokio', 'Varsovia',
  'Viena', 'Washington D.C.', 'Wellington'];

  const ciudadesOrdenadas = ciudades.sort();
  
  console.log(ciudadesOrdenadas);
  // Estado para almacenar la ciudad seleccionada
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState(ciudades[0]);
  const [weatherData, setWeatherData] = useState(null);


  useEffect(() => {
    // Verificar si se tiene la ubicación completa
    if (ciudadSeleccionada) {
      // Construir la URL para la API de OpenWeather
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudadSeleccionada}&appid=ecce75668fb512c7b4b22a15d930fb7e&units=metric&lang=es`;
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
    <h1>Clima Check</h1>
      {/* <img src="/Black Couple Outdoors 1.png" alt="appImage" /> */}
        <h2 className='subtitulo'>Selecciona una ciudad para ver su clima los próximos cinco días</h2>
        <div className='select'>
               <select className='select' value={ciudadSeleccionada} onChange={handleChangeCiudad}>
                  {/* Mapear sobre el arreglo de ciudades para generar las opciones del select */}
                  {ciudades.map((ciudad) => (
                    <option key={ciudad} value={ciudad}>
                      {ciudad}
                    </option>
                    ))}
                </select>
        </div>
      {weatherData && weatherData.list && (
        <div className='cajaGrande'>
          {weatherData.list.slice(0, 5).map((forecast, index) => (
            <div key={index} className='cincoDiasCiudades'>
              <div className='cajaLateral'>
                <div className='cajitaDoble'>
                <p>{obtenerNombreDia(index)}</p>
                <div className='cajitaDobleImg'>
                <img
                src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                alt={forecast.weather[0].description}
                onError={(e) => console.error("Error al cargar la imagen:", e)}
                />
                </div>
                </div>
                <p>Temperatura: {Math.round(forecast.main.temp)}°C</p>
                <p>Sensación térmica: {Math.round(forecast.main.feels_like)}°C</p>
                <p>Temperatura mínima: {Math.round(forecast.main.temp_min)}°C</p>
                <p>Temperatura máxima: {Math.round(forecast.main.temp_max)}°C</p>
                <p>Pres. Atmosférica: {forecast.main.pressure} hPa</p>
                <p>Descripción: {forecast.weather[0].description}</p>
                <p>Nubosidad variable: {forecast.clouds.all}%</p>
                <p>Humedad: {forecast.main.humidity}%</p>
                <p>Visibilidad: {Math.round(forecast.visibility / 1000)} km</p>
              </div>
            </div>
          ))}
        </div>
      )}
  </>  
  );
}
export default PrevisionDelTiempoCincoDiasEnCiudadSeleccionada