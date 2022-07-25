import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { datailCountries } from "../../../redux/actions";
import { useEffect } from "react";

export default function Details(){
    
    const { id } = useParams();
    let detail = useSelector((state) => state.countryDetail)
    const dispatch = useDispatch()

    useEffect(()=>{dispatch(datailCountries(id))},[])

    return(
        <div>
            <div>
                <h1>{detail?.name}</h1>
                <h5>Id:{detail?.id}</h5>
                <h5>Continent:{detail?.region}</h5>
                <img src={detail?.flag} alt="" />
                <h5>SUBREGION:{detail?.subregion}</h5>
                <h5>AREA:{detail?.area}</h5>
                <h5>CAPITAL:{detail?.capital}</h5>
                <h5>POBLACION:{detail?.population}</h5>
            </div>
            <div>

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