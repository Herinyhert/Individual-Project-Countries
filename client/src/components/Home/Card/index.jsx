import React from 'react';
import { Link } from 'react-router-dom';
import s from "../Card/Card.module.css";

export default function Card({ id, name, flag, region, capital  }){

    return(
        <div className={s.card}>
            <img className={s.imgstyle} src={flag} alt="1234" />
            <h4>{name}</h4>
            <p>Continent: {region}</p>
        </div>
    );
}
