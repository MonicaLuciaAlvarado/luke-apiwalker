import axios from "axios";
import React, {useState, useEffect} from "react";
import luke from "./obi.jpg";
const People = (props) =>{
    const [list, setList]=useState([]);
    const [error,setError]=useState({state:false});
        // Desestructurar props
    const {id}=props;

    useEffect(()=>{
        if(id === ''){
            axios.get(`https://swapi.dev/api/people/`)
            .then(response=>{setList(response.data.results)})//response tiene todo los datos, response.data le envía los datos a responseJson
        }
        else if(id !== ''){
            axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response=>{setList([response.data]); setError({state:false})})//response tiene todo los datos, response.data le envía los datos a responseJson
            .catch(err=>{setError({state:true})});
        }
    },[id])

    return(
            <div>
            {
            error.state?
            <div className="elError">
                <img src={luke} alt="logo" className="icono"></img>
                <p>Estos no son los droides que está buscando</p>
            </div>:
            <div>
                <h1>People with id: {id}</h1>
                <table rules="all">
                <thead>
                    <tr className="columna">
                        <th>Name</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Hair Color</th>
                        <th>Skin Color</th>
                        <th>Eye Color</th>
                        <th>Birth Year</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item,i)=>
                        <tr key={i}>
                            <td className="col">{item.name}</td>
                            <td className="col">{item.height}</td>
                            <td className="col">{item.mass}</td>
                            <td className="col">{item.hair_color}</td>
                            <td className="col">{item.skin_color}</td>
                            <td className="col">{item.eye_color}</td>
                            <td className="col">{item.birth_year}</td>
                            <td className="col">{item.gender}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
            }
            </div>
    )
}
export default People;