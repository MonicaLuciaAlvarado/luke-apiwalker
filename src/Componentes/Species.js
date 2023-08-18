import axios from "axios";
import React, {useState, useEffect} from "react";
const Species = () =>{
    const [list, setList]=useState([]);
    useEffect(()=>{
        axios.get("https://swapi.dev/api/species")
        .then(response=>setList(response.data.results))//response tiene todo los datos, response.data le envía los datos a responseJson
    },[])

    return(
        <div>
            <h1>Species</h1>
            <table rules="all">
                <thead>
                    <tr className="columna">
                        <th>Name</th>
                        <th>Classification</th>
                        <th>Designation</th>
                        <th>Average Height</th>
                        <th>Skin Colors</th>
                        <th>Eye Colors</th>
                        <th>Average Lifespan</th>
                        <th>Language</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item,i)=>
                        <tr key={i}>
                            <td className="col">{item.name}</td>
                            <td className="col">{item.classification}</td>
                            <td className="col">{item.designation}</td>
                            <td className="col">{item.average_height}</td>
                            <td className="col">{item.skin_colors}</td>
                            <td className="col">{item.eye_colors}</td>
                            <td className="col">{item.average_lifespan}</td>
                            <td className="col">{item.language}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Species;