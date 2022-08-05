import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../../../redux/actions";
import validate from "./controller"
import s from './form.module.css'


export default function ActivityCreate() {

    const dispatch = useDispatch()
    const history = useHistory()
    //const activity = useSelector((state) => state.allActivity)
    const countries = useSelector((state) => state.allCountries)
    const [error , setErrors] = useState({});
    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: [],
        country: [],
    })

    // useEffect(() =>{ dispatch(getAllActivities()), []})


    function handleChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    console.log(input)

    function handleSelet(e) {
        setInput({ ...input, country: [...input.country, e.target.value] })
    }
    function handleSeletSeason(e) {
        setInput({ ...input, season: [...input.season, e.target.value] })
    }

    function handleSubmit(e) {
        e.preventDefault(e)
        console.log(input)
        dispatch(createActivity(input))
        alert("Actividad Creada")
        setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: [],
            country: [],
        })
        history.push('/home')
    }

    function onClose(e) {
        e.preventDefault(e)
        setInput({ ...input, season: input.season.filter(c => c !== e.target.value) })
    }
    function onCloseCountries(e) {
        e.preventDefault(e)
        setInput({ ...input, country: input.country.filter(c => c !== e.target.value) })
    }

    return (
        <div className={s.containerForm}>
            <Link to="home"><button>Volver</button></Link>
            <div>
                <h1>Create your Activity</h1>
            </div>
            <div>
                <form >

                    <div className={s.inputGroup}>
                        <input required="" type="text" autocomplete="off" className={s.inputd}
                            value={input.name} name="name" onChange={(e) => handleChange(e)} />
                        <label className={s.userLabel}>Name</label>
                        {/* {error.name && (<p>{error.name}</p>)} */}
                    </div>

                    <div className={s.inputGroup}>
                        <input required="" type="range" min="1" max="5" className={s.inputdDif}
                            value={input.difficulty} name="difficulty" onChange={(e) => handleChange(e)} />
                        <label className={s.userLabelDif}>Dificultad</label>
                            <p>Nivel: <span className={s.nivel}>{input.difficulty}</span></p>
                        {/* {error.dificulty && (<p>{error.dificulty}</p>)} */}
                    </div>

                    <div className={s.inputGroup}>
                        <input required="" type="time" autocomplete="off" className={s.inputdTime}
                            value={input.duration} name="duration" onChange={(e) => handleChange(e)} />
                        <label className={s.userLabelTime}>Duracion</label>
                        {/* {error.duration && (<p>{error.duration }</p>)} */}
                    </div>
                    <div className={s.inputGroup}>
                        <label className={s.userLabetTemp}>Temporada: </label>
                        <select name="season" value={input.season} className={s.inputdTemp} onChange={(e) => handleSeletSeason(e)}>
                            <option value="" disable selected hidden>{""}Select</option>
                            <option value="summer">Summer</option>
                            <option value="winter">Winter</option>
                            <option value="spring">Spring</option>
                            <option value="autumn">Autumn</option>
                        </select>
                        <div className={s.chip}>
                        <span>{input.season.map(el =>
                            <span className={s.interno}>
                                <button className={s.closeIcon} value={el} onClick={(e) => onClose(e)}>{el}</button>
                            </span>)}
                        </span>
                        </div>
                        {/* {error.season && (<p>{error.season }</p>)} */}
                    </div>
                    <div className={s.inputGroup}>
                        <label>Pais:</label>
                        <select className={s.inputdTemp} onChange={(e) => handleSelet(e)}>
                            {countries.map((c) => (
                                <option value={c.name}> {c.name} </option>
                            ))}
                        </select>
                        <div className={s.chip}>
                            {/* <ul><li>{input.country.map(el => el + ',')}</li></ul> */}
                            <span>{input.country.map(el =>
                                <>
                                    <span className={s.interno}>
                                        <button className={s.closeIcon} value={el} onClick={(e) => onCloseCountries(e)}>{el}</button></span>
                                </>)}</span>
                        </div>
                    </div>
                </form>
                <button className={s.create} onClick={(e) => handleSubmit(e)}>Crear</button>
            </div>
        </div>
    )
}
