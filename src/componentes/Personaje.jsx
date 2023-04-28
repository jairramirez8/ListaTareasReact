import React, {useEffect, useState}from "react";
import { onlyone } from "./services/taskservice";
import { useParams } from "react-router-dom";

const Personaje = () => {
const [personaje, setPersonajes] = useState(null)

    const params = useParams()
    useEffect(()=>{
        onlyone(params.id, setPersonajes)
    },[])
    return(
        <>
        {personaje != null ? (
            <div>
                <h2>Personaje con el id {params.id}</h2>
                <p>con el nombre {personaje.name}</p>
                <img src={personaje.image} alt="" />
            </div>
        ) : ('no hay personaje')}    
        </>
    )
}

export default Personaje