import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { datailCountries } from "../../../redux/actions";
import { useEffect } from "react";

import s from "./details.module.css"

export default function Details(){
    
    const { id } = useParams();
    let detail = useSelector((state) => state.countriesDetail)
    const dispatch = useDispatch()

    useEffect(()=>{dispatch(datailCountries(id))},[dispatch])
    

    return(
        <div className={s.container}>
            <div className={s.details}>
                <img className={s.imgdetailstyle} src={detail?.flag} alt="" />
                <h1>{detail?.name}</h1>
                <h5>Id:  {detail?.id}</h5>
                <h5>Continent:  {detail?.region}</h5>
                <h5>Subregion:  {detail?.subregion}</h5>
                <h5>Area:  {detail?.area}</h5>
                <h5>Capital:  {detail?.capital}</h5>
                <h5>Poblacion:  {detail?.population}</h5>
            </div>
            <div>
                <br />

                <h5>ACTIVIDADES</h5>


                {detail?.activities?.length ?
                    detail?.activities.map(a => {
                        return (
                            <div
                                key={a.id} >
                                <h5>{a.name}</h5>
                                <h5>Difficulty: {a.dificulty}</h5>
                                <h5>Duration: {a.duration} mins</h5>
                                <h5>Season: {a.season}</h5>
                            </div>)
                    }) :
                    <h5> Sin Actividades </h5>
                }
            </div>

            <Link to="/home"><button>Volver</button></Link>
        </div>
    )
}