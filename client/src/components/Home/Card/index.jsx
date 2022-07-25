import React from 'react';
import { Link } from 'react-router-dom';
import "../Card/Card.css";

export default function Card({ id, name, flag, region }){

    return(
        <div className="card">
            <img className="imgstyle" src={flag} alt="1234" />
            <h2>{name}</h2>
            <p>{region}</p>



            <Link to={`/country/${id}`}><button> Detalle </button></Link>
        </div>
    );
}
