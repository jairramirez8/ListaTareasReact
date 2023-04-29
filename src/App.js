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
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import New from "./componentes/New";
import { NavLink } from 'react-router-dom';

const App = () => {


  return (
    <div className="contenedor">
         <nav>
            <a href='/' class="link">Tasks</a>
            <a href='/api' class="link">API</a>
         </nav>
         
         <BrowserRouter>
          <Routes>
            <Route path='/api' element={<Inicio></Inicio>}></Route>
            <Route path='/' element={<New/>}> </Route>
            <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
          </Routes>
         </BrowserRouter>
    </div>
    
    
  );
}



export default App;

//test1