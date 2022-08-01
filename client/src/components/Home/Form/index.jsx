import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../../../redux/actions";
import validate from "./controller"


export default function ActivityCreate(){

    const dispatch = useDispatch()
    const history = useHistory()
    const activity = useSelector((state) => state.allActivity)
    const countries = useSelector((state) => state.allCountries)
    const [input,setInput] = useState({
        name: "",
        difficulty:"",
        duration:"",
        season:"",
        country: [], 
    })

        // useEffect(() =>{ dispatch(getAllActivities()), []})
                

        function handleChange(e){
            setInput({...input, [e.target.name]: e.target.value})
        }
        console.log(input)

        function handleSelet(e){
            setInput({...input, country: [...input.country, e.target.value]})
        }

        function handleSubmit(e){
            e.preventDefault(e)
            console.log(input)
            dispatch(createActivity(input))
            alert("Actividad Creada")
            setInput({
                name: "",
                difficulty:"",
                duration:"",
                season:"",
                country: [], 
            })
            history.push('/home')
        }

    return(
        <div>
            <Link to="home"><button>Volver</button></Link>
            <div>
                <h1>Create your Activity</h1>
            </div>
            <div>
                <form >
                    <label>Nombre de Actividad: </label>
                    <input type="text" value={input.name} name="name" onChange={(e) => handleChange(e)}/>
                    {/* {error.name && (<p>{error.name}</p>)} */}
                    <br />
                    <label>Dificultad:</label>
                    <input type="number" value={input.difficulty} name="difficulty" onChange={(e) => handleChange(e)}/>
                    {/* {error.dificulty && (<p>{error.dificulty}</p>)} */}
                    <br />
                    <label>Duracion: </label>
                    <input type="number" value={input.duration} name="duration" onChange={(e) => handleChange(e)}/>
                    {/* {error.duration && (<p>{error.duration }</p>)} */}
                    <br />
                    <label>Temporada: </label>
                    <select name="season" value={input.season} onChange={(e)=>handleChange(e)}>
                        <option value="summer">Summer</option>
                        <option value="winter">Winter</option>
                        <option value="spring">Spring</option>
                        <option value="autumn">Autumn</option>
                    </select>
                    {/* {error.season && (<p>{error.season }</p>)} */}
                    <br />
                    <label>Pais:</label>
                    <select onChange={(e) => handleSelet(e)}>
                       {countries.map((c) => (
                            <option value={c.name}> {c.name} </option>
                        ))}
                    </select>
                    <ul><li>{input.country.map(el => el + ',')}</li></ul>
                </form>
                <button onClick={(e)=>handleSubmit(e)}>Crear</button>
            </div>
        </div>
    )
}
