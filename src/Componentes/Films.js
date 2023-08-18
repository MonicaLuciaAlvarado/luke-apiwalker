import axios from "axios";
import React, {useState, useEffect} from "react";
const Films = () =>{
    const [list, setList]=useState([]);


    useEffect(()=>{
        axios.get("https://swapi.dev/api/films")
        .then(response=>setList(response.data.results))//response tiene todo los datos, response.data le envía los datos a responseJson
    },[])

    return(
        <div>
            <h1>Filmes</h1>
            <table rules="all">
                <thead>
                    <tr className="columna">
                        <th>Title</th>
                        <th>Opening Crawl</th>
                        <th>Director</th>
                        <th>Producer</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item,i)=>
                        <tr key={i}>
                            <td className="title">{item.title}</td>
                            <td className="resumen">{item.opening_crawl}</td>
                            <td className="director">{item.director}</td>
                            <td className="producer">{item.producer}</td>
                            <td className="releaseDate">{item.release_date}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Films;