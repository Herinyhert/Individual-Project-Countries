import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../../../redux/actions";
import validate from "./controller";
//import CheckTime from "./controller"
import s from './form.module.css';
import img from '../../../img/contact-feedback-blank-form-flat-260nw-1779930926.jpg (624×280) - Google Chrome 12_8_2022 00_52_00.png';


export default function ActivityCreate() {

    const dispatch = useDispatch()
    const history = useHistory()
    //const activity = useSelector((state) => state.allActivity)
    const countries = useSelector((state) => state.allCountries)
    const [errors, setErrors] = useState({ enablebutton: true });
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
        setErrors(validate({ ...input, [e.target.name]: e.target.value },))
    }
    //console.log(input)

    function handleSeletSeason(e) {
        console.log(e)
        //const newInput = { ...input, season: [...input.season, e.target.value] }
        //if(!input.season.includes(e.target.value)){ 
        setInput({ ...input, season: [...input.season, e.target.value] })
        setErrors(validate({ ...input, [e.target.name]: e.target.value },))
        //}
    }

    function handleSelet(e) {
        const newInput = { ...input, country: [...input.country, e.target.value] }
        //if(!input.country.includes(e.target.value)){ 
        setInput(newInput)
        setErrors(validate(newInput))
        //}
    }

    function handleSubmit(e) {
        e.preventDefault(e)
        console.log(input)
        if (Object.keys(errors).length == 0) {
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
        <>
            <Link to="home"><button className={s.return}>Return</button></Link>
            <div className={s.containerForm}>
                <div>
                    <h1>Create your Activity</h1>
                </div>
                <div>
                    <form >
                        <div className={s.inputGroup}>
                            <input required="" type="text" autocomplete="off" className={s.inputd}
                                value={input.name} name="name" onChange={(e) => handleChange(e)} />
                            <label className={s.userLabel}>Name</label>
                            {errors.name && (<p className={s.errors}>{errors.name}</p>)}
                        </div>

                        <div className={s.inputGroup}>
                            <input required="" type="range" min="1" max="5" className={s.inputdDif}
                                value={input.difficulty} name="difficulty" onChange={(e) => handleChange(e)} />
                            <label className={s.userLabelDif}>Difficulty</label>
                            <p className={s.pnivel}>Nivel: <span className={s.nivel}>{input.difficulty}</span></p>
                            {errors.difficulty && (<p className={s.errors}>{errors.difficulty}</p>)}
                        </div>

                        <div className={s.inputGroup}>
                            <input required type="time" className={s.inputdTime}
                                value={input.duration} name="duration" onChange={(e) => handleChange(e)} />

                            <label className={s.userLabelTime}>Duration</label>
                            {errors.duration && (<p className={s.errors}>{errors.duration}</p>)}
                        </div>

                        <div className={s.inputGroupSeason}>
                            <label className={s.userLabelSeason}>Season</label>
                            <select name="season" className={s.inputdTime}
                                onChange={(e) => handleSeletSeason(e)}>
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
                            {errors.season && (<p className={s.errors}>{errors.season}</p>)}
                        </div>
                        <div className={s.inputGroupCountries}>
                            <label className={s.userLabelCountries}>Pais</label>
                            <select className={s.inputdTime} onChange={(e) => handleSelet(e)}>
                                <option value="" disable selected hidden>Select a country</option>
                                {countries.map((c) => (
                                    <option value={c.name}> {c.name} </option>
                                ))}
                            </select>
                            <div className={s.chip}>
                                {/* <ul><li>{input.country.map(el => el + ',')}</li></ul> */}
                                <span>{input.country.map(el =>
                                    <>
                                        <span className={s.internoCountries}>
                                            <button className={s.closeIcon} value={el}
                                                onClick={(e) => onCloseCountries(e)}>{el}
                                            </button></span>
                                    </>)}</span>
                            </div>
                        </div>
                        {errors.id && (<p className={s.errors}>{errors.id}</p>)}
                    </form>
                    <button className={s.create} onClick={(e) => handleSubmit(e)}
                        disabled={Object.keys(errors).length !== 0}>to create
                    </button>
                </div>
            </div>
            <img src={img} alt="form" className={s.imgform} />
        </>
    )
}
