import axios from "axios";

const APIURL = new URL("https://taskapi.juanfrausto.com/api/task");

export const getTask = async ()=>{
    const response = await axios.get(APIURL)
    return response.data
}

const allcaracters = async (state) => {
    const peticion = await axios.get('https://rickandmortyapi.com/api/character')
    state(peticion.data.results)
}

const onlyone = async(id, state)=>{
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(peticion.data)
}

export{
    allcaracters,
    onlyone
}
