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
            <div class="personaje-details">
                <h2>Este peronsaje cuenta con el ID: {params.id}</h2>
                <p>Con el nombre {personaje.name}</p>
                <img src={personaje.image} alt="" />
            </div>
        ) : ('no hay personaje')}    
        </>
    )
}

export default Personaje