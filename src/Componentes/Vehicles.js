import axios from "axios";
import React, {useState, useEffect} from "react";
const Vehicles = () =>{
    const [list, setList]=useState([]);


    useEffect(()=>{
        axios.get("https://swapi.dev/api/vehicles")
        .then(response=>setList(response.data.results))//response tiene todo los datos, response.data le envía los datos a responseJson
    },[])

    return(
        <div>
            <h1>Vehicles</h1>
            <table rules="all">
                <thead>
                    <tr className="columna">
                        <th>Name</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>Length</th>
                        <th>Max atmosphering speed</th>
                        <th>Crew</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item,i)=>
                        <tr key={i}>
                            <td className="col">{item.name}</td>
                            <td className="col">{item.model}</td>
                            <td className="col">{item.manufacturer}</td>
                            <td className="col">{item.length}</td>
                            <td className="col">{item.max_atmosphering_speed}</td>
                            <td className="col">{item.crew}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Vehicles;