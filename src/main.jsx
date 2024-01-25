/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import './index.css'



//Rutas
import TiempoActualEnMiUbicacion from'./pages/TiempoActualEnMiUbicacion.jsx'
import TiempoCincoDíasEnMiUbicación from './pages/TiempoCincoDíasEnMiUbicación.jsx'
import TiempoActualCincoCiudades from './pages/TiempoActualCincoCiudades.jsx'
import PrevisiondDelTiempoCincoDíasEnCiudadSeleccionada from './pages/PrevisiondDelTiempoCincoDíasEnCiudadSeleccionada.jsx'
import NotFound from'./pages/NotFound.jsx'
import './styles/main.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter basename="/">
      <Routes>
             <Route path='/' element={<App />}>
               <Route index element= {<TiempoActualEnMiUbicacion />} /> 
               <Route path='tiempoCincoDíasEnMiUbicación' element={<TiempoCincoDíasEnMiUbicación />} />  
               <Route path='tiempoActualCincoCiudades' element={<TiempoActualCincoCiudades />} />     
               <Route path='previsiondDelTiempoCincoDíasEnCiudadSeleccionada' element={<PrevisiondDelTiempoCincoDíasEnCiudadSeleccionada />} />        
               <Route path='*' element={<NotFound />} />            
             </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)