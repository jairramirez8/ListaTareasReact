import React,{useEffect, useState} from "react";
import '../index.css';
import { allcaracters } from "./services/taskservice";

const Inicio = () => {
    const [personajes, setPersonajes] = useState(null)

    useEffect(()=>{
        allcaracters(setPersonajes)
    },[])

    return(
        <>
        {personajes != null ? (
            personajes.map(personaje => (
                <div key={personaje.id}>
                    <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
                </div>
            ))
        ) : ('No hay personajes')}
        </>
    )
}

export default Inicio