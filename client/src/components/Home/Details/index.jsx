import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { datailCountries } from "../../../redux/actions";
import { useEffect } from "react";
import img from '../../../img/informacion-ciberprotector.png'

import s from "./details.module.css"

export default function Details(){
    
    const { id } = useParams();
    let detail = useSelector((state) => state.countriesDetail)
    let detailActiviti = useSelector((state) => state.allActivity)
    const dispatch = useDispatch()

    useEffect(()=>{dispatch(datailCountries(id))},[dispatch])
    console.log(detail)

    return(
        <>
        <div className={s.crearActivity}><h1>Details Countries</h1>
            <Link to="/activities">
                <button class={s.button}> Crear
                </button>
            </Link>
        </div>
        <div className={s.container}>
            <div className={s.details}>
                <img className={s.imgdetailstyle} src={detail?.flag} alt="bandera" />
                <h1>{detail?.name}</h1>
                <h5>Id:  {detail?.id}</h5>
                <h5>Continent:  {detail?.region}</h5>
                <h5>Subregion:  {detail?.subregion}</h5>
                <h5>Area:  {detail?.area}</h5>
                <h5>Capital:  {detail?.capital}</h5>
                <h5>Poblacion:  {detail?.population}</h5>
            </div>
            <div className={s.activity}>

                <h2>ACTIVIDADES</h2>


                {detail.Activities?.length ?
                    detail?.Activities.map(a => {
                        return (
                           <div className={s.carddd}>
                             <div key={a.id} >
                                <h3>{a.name}</h3>
                                <h5>Difficulty: {a.difficulty}</h5>
                                <h5>Duration: {a.duration} mins</h5>
                                <h5>Season: {a.season}</h5>
                            </div>
                           </div>)
                    }) :
                    <div className={s.sinActivity}>
                        <h3> País sin actividad Turistica </h3>
                        <p>Puedes crear una actividad para este pais, desde el boton Crear</p>
                        <img className={s.imgSActivity} src={img} alt="imagen" />
                    </div>
                }
            </div>

            {/* <Link to="/home"><button>Volver</button></Link> */}
        </div>
        </>
    )
}