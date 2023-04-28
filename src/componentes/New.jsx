import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';
import { getTask } from './componentes/services/taskservice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './componentes/Inicio'
import Personaje from './componentes/Personaje'
import './index.css';

const App = () => {

  const tareasGuardadas = 
    localStorage.getItem('tareas') ? 
    JSON.parse(localStorage.getItem('tareas')) : []; 

  const [tareas, cambiarTareas] = useState(tareasGuardadas);
   
  useEffect(() => {
    
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);
/*
  useEffect(async () =>{
    const tareasAPI = await getTask();
    console.log(tareasAPI)
  },[]);
*/
  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas = true;
  }else {
   configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  const handleClick = () => {
    window.location.replace('https://mi-sitio-web.com/');
  };
  return (
    <div className="contenedor">
        
         <BrowserRouter>
          <Routes>
            <Route path='/' element={<Inicio></Inicio>}></Route>
            <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
          </Routes>
         </BrowserRouter>
    </div>

  );
}



export default App;

//test1