import React, {useState} from "react";
import './App.css';
import People from './Componentes/People';
import Films from './Componentes/Films';
import StarShips from './Componentes/StarShips';
import Vehicles from './Componentes/Vehicles';
import Species from './Componentes/Species';
import Planets from './Componentes/Planets';


import { Routes, Route } from "react-router-dom"
import { useNavigate} from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const [idEnviar,setIdEnviar]=useState('');
  var id=0;

  const modificarID=(e)=>{
    id=e.target.value;
    console.log("el id toma valor de: ");
    console.log(id);
  }
  const obtenerId=(e)=>{
    e.preventDefault();
    console.log("El valor de id que entra es: ");
    console.log(id);
    setIdEnviar(id);
    console.log(idEnviar);
  }
  const seleccionado=(e)=>{
    let area="";
    area=e.target.value;
    console.log("el valor de área es:")
    let string="/"+area;
    navigate(string.toLocaleLowerCase());
  }
  return (
    <div className="App">
      <label htmlFor="busqueda">Search for: </label>
      <select name="busqueda" id="busqueda" onChange={seleccionado}>
        <option value="people">People</option>
        <option value="films">Films</option>
        <option value="starships">Starships</option>
        <option value="vehicles">Vehicles</option>
        <option value="species">Species</option>
        <option value="planets">Planets</option>
      </select>
      <form onSubmit={obtenerId}>
      <label htmlFor="id">Id:</label>
      <input type="text" name="id" id="id" placeholder="Escriba el id en número entero" onChange={modificarID}/>
      <input type="submit" value="Search"/> 
      </form>
      <Routes>
        <Route path="/people" element={<People id={idEnviar}/>}/>
        <Route path="/films" element={<Films/>}/>
        <Route path="/starships" element={<StarShips/>}/>
        <Route path="/vehicles" element={<Vehicles/>}/>
        <Route path="/species" element={<Species/>}/>
        <Route path="planets" element={<Planets/>}/>
      </Routes>
    </div>
  );
}

export default App;
