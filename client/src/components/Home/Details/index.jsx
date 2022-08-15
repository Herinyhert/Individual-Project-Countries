import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { datailCountries } from "../../../redux/actions";
import { useEffect } from "react";
import img from '../../../img/informacion-ciberprotector.png'
import img1 from '../../../img/error-404-leve-this-is-fine.png'

import s from "./details.module.css"

export default function Details() {

    const { id } = useParams();
    let detail = useSelector((state) => state.countriesDetail)
    const dispatch = useDispatch()

    useEffect(() => { dispatch(datailCountries(id)) }, [dispatch])
    //console.log("puede este", detail)

    return (
        <>
            <div className={s.crearActivity}>
                <h1>Details Countries</h1>
            </div>
            <div className={s.container}>
                {detail.id
                    //{console.log(detail)}
                    ?
                    <div>
                        <Link to="/activities">
                            <button class={s.button}>to create
                            </button>
                        </Link>
                        <div className={s.details}>
                            <img className={s.imgdetailstyle} src={detail.flag} alt="bandera" />
                            <h1>{detail.name}</h1>
                            <h5>Id:  {detail.id}</h5>
                            <h5>Continent:  {detail.region}</h5>
                            <h5>Subregion:  {detail.subregion}</h5>
                            <h5>Area:  {detail.area}</h5>
                            <h5>Capital:  {detail.capital}</h5>
                            <h5>Poblacion:  {detail.population}</h5>
                        </div>
                        <div>
                            <h1 className={s.h1Activitis}>ACTIVIDADES</h1>
                            <div className={s.activity}>
                                {
                                    detail.Activities?.length ?
                                        detail?.Activities.map(a => {
                                            return (
                                                <div className={s.carddd} key={a.id} >
                                                    <div>
                                                        <h3>{a.name}</h3>
                                                        <h5>Difficulty: {a.difficulty}</h5>
                                                        <h5>Duration: {a.duration} mins</h5>
                                                        <h5>Season: {a.season.map(s=>{ return <p key={s.name}>{s}</p> })}</h5>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        :
                                        <div className={s.sinActivity}>
                                            <h3> País sin actividad Turistica </h3>
                                            <p>Puedes crear una actividad para este pais, desde el boton Crear</p>
                                            <img className={s.imgSActivity} src={img} alt="imagen" />
                                        </div>
                                }
                            </div>
                        </div>
                    </div>

                    : <div className={s.errorId}> <h1>Error to detail the country searched</h1> <img src={img1} alt="error" className={s.imgErrorId} /></div>
                }
                {/* {console.log("estoy aqui", detail)} */}
            </div>
        </>
    )
}