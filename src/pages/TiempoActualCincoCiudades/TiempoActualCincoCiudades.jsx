/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import'../../pages/TiempoActualCincoCiudades/TiempoActualCincoCiudades.css'
import convertirUnixATiempo from '../../components/ConvertirUnixATiempo';


export const TiempoActualCincoCiudades = () => {
  // Array de ciudades
  //const ciudades = ['Buenos Aires', 'Nueva York', 'Londres', 'Tokio', 'Sidney', 'Barcelona', 'Santiago de Chile', 'Lima', 'Helsinki', 'Madrid'];
  const ciudades = [
   'Ámsterdam', 'Ankara', 'Auckland', 'Barcelona', 'Berlín', 'Bogotá', 'Brisbane', 'Brasilia', 'Buenos Aires', 'Canberra', 'Ciudad de Belice',
    'Ciudad de Guatemala', 'Ciudad de México', 'Doha', 'Honolulu', 'Jerusalén', 'La Habana', 'Lima', 'Lisboa', 'Londres', 'Madrid',
    'Managua', 'Melbourne', 'Nouméa', 'Nueva Delhi', 'Ottawa', 'Panamá', 'París', 'Pekín', 'Port Moresby', 'Quetzaltenango', 'Riyadh',
    'Roma', 'San José', 'San Pedro Sula', 'San Salvador', 'Santiago', 'Sídney', 'Suva', 'Tegucigalpa', 'Teherán', 'Tokio', 'Varsovia',
    'Viena', 'Washington D.C.', 'Wellington'
  ];
  
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
        <h2 className='subtitulo'>Elije una Ciudad para ver su clima actual</h2>
        <div className='select'>
          <select className='select' value={ciudadSeleccionada} onChange={handleChangeCiudad}>
            {ciudades.map((ciudad) => (
              <option key={ciudad} value={ciudad}> 
              {ciudad}
              </option>
                ) 
              )  
            }
          </select>
        </div>
        {weatherData && ( 
        <div className='tiempoCiudades'>
            <div className='cajaInferior'>
            <div className='appImage'>
                <img src="/Black Couple Outdoors 1.png" alt="appImage" />
            </div>
                <div>
                <p>{ciudadSeleccionada}</p>
                <p>{Math.round(weatherData.list[0].main.temp)}°C</p>
                </div>
                
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
              <p>Temperatura: {Math.round(weatherData.list[0].main.temp)}°C</p>
              <p>Sensación térmica: {Math.round(weatherData.list[0].main.feels_like)}°C</p>
              <p>Temperatura mínima: {Math.round(weatherData.list[0].main.temp_min)}°C</p>
              <p>Temperatura máxima: {Math.round(weatherData.list[0].main.temp_max)}°C</p>
              <p>Pres Atmosférica: {weatherData.list[0].main.pressure} hPa</p>
              <p>Humedad: {weatherData.list[0].main.humidity}%</p>
              <p>Clima: {weatherData.list[0].weather[0].main}</p>
              {/* <p>País: {weatherData.city.country}</p>
              <p>Ciudad: {weatherData.city.name}</p> */}
            </div>
        </div>
        )}
      
    </>
  )
  }
  
export default TiempoActualCincoCiudades;


/************************************************************************************** */
/******************************PRUEBA PARA SELECT DINÁMICO ****************************
import { NavLink, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../styles/tiempoCiudades.css';

export const TiempoActualCincoCiudades = () => {
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [ciudadesDisponibles, setCiudadesDisponibles] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a la API de OpenWeatherMap para obtener la lista de ciudades
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=${ciudadSeleccionada}&appid=ecce75668fb512c7b4b22a15d930fb7e&units=metric&lang=es')
      .then(response => response.json())
      .then(data => {
        // Extraer la lista de ciudades desde la respuesta de la API
        const cities = data.list.map(city => city.name);
        setCiudadesDisponibles(cities);
      })
      .catch(error => console.error('Error al obtener la lista de ciudades:', error));
  }, []);

  const handleChangeCiudad = (event) => {
    setCiudadSeleccionada(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para cargar datos de la ciudad seleccionada
    // Puedes utilizar la misma lógica que tenías en el useEffect anterior
  };

  return (
    <>
      <div>
        <h1>Clima Check</h1>
        <h2>Elije una Ciudad para ver su Clima Actual</h2>
        <form onSubmit={handleSubmit}>
          <select className='select' value={ciudadSeleccionada} onChange={handleChangeCiudad}>
            <option value="" disabled>Selecciona una ciudad</option>
            {ciudadesDisponibles.map((ciudad) => (
              <option key={ciudad} value={ciudad}>
                {ciudad}
              </option>
            ))}
          </select>
          <button type="submit">Consultar Clima</button>
        </form>
        {weatherData && (
          <div className='tiempoCiudades'>
           
          </div>
        )}
      </div>
    </>
  );
};

export default TiempoActualCincoCiudades;
*/