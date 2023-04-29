import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header'
import FormularioTareas from './FormularioTareas';
import ListaTareas from './ListaTareas';
import Inicio from './Inicio'
import Personaje from './Personaje'
import {useState, useEffect} from 'react'

function New() {
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
  window.location.replace('http://localhost:3000/NEW');
};
  return (
    <div>
         <Header 
          mostrarCompletadas={mostrarCompletadas} 
          cambiarMostrarCompletadas={cambiarMostrarCompletadas}
        />  
        <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
        <ListaTareas 
          tareas={tareas} 
          cambiarTareas={cambiarTareas}
          mostrarCompletadas={mostrarCompletadas}
         />
         
    </div>
  );
}

export default New;
