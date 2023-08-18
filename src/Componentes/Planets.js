import axios from "axios";
import React, {useState, useEffect} from "react";
const Planets = () =>{
    const [list, setList]=useState([]);
    useEffect(()=>{
        axios.get("https://swapi.dev/api/planets")
        .then(response=>setList(response.data.results))//response tiene todo los datos, response.data le envía los datos a responseJson
    },[])

    return(
        <div>
            <h1>Planets</h1>
            <table rules="all">
                <thead>
                    <tr className="columna">
                        <th>Name</th>
                        <th>Rotation Period</th>
                        <th>Orbital Period</th>
                        <th>Diameter</th>
                        <th>Climate</th>
                        <th>Gravity</th>
                        <th>Terrain</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item,i)=>
                        <tr key={i}>
                            <td className="col">{item.name}</td>
                            <td className="col">{item.rotation_period}</td>
                            <td className="col">{item.orbital_period}</td>
                            <td className="col">{item.diameter}</td>
                            <td className="col">{item.climate}</td>
                            <td className="col">{item.gravity}</td>
                            <td className="col">{item.terrain}</td>
                            <td className="col">{item.population}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Planets;