/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import './index.css'



//Rutas
import TiempoActualEnMiUbicacion from'./pages/TiempoActualEnMiUbicacion/TiempoActualEnMiUbicacion.jsx'
// eslint-disable-next-line no-unused-vars
import TiempoCincoDiasEnMiUbicacion from './pages/TiempoCincoDiasEnMiUbicacion/TiempoCincoDiasEnMiUbicacion.jsx'
import TiempoActualCincoCiudades from './pages/TiempoActualCincoCiudades/TiempoActualCincoCiudades.jsx'
// eslint-disable-next-line no-unused-vars
import PrevisionDelTiempoCincoDiasEnCiudadSeleccionada from './pages/PrevisionDelTiempoCincoDiasEnCiudadSeleccionada/PrevisionDelTiempoCincoDiasEnCiudadSeleccionada.jsx'
import NotFound from'./pages/NotFound/NotFound.jsx'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
             <Route path='/' element={<App />}>
               <Route index element= {<TiempoActualEnMiUbicacion />} /> 
               <Route path='tiempoCincoDiasEnMiUbicacion' element={<TiempoCincoDiasEnMiUbicacion />} />  
               <Route path='tiempoActualCincoCiudades' element={<TiempoActualCincoCiudades />} />     
               <Route path='previsionDelTiempoCincoDiasEnCiudadSeleccionada' element={<PrevisionDelTiempoCincoDiasEnCiudadSeleccionada />} />        
               <Route path='*' element={<NotFound />} />            
             </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)