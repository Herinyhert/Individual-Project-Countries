import React from 'react';
import s from "../Card/Card.module.css";

export default function Card({ name, flag, region, population, id }){

    return(
        <div className={s.card} key={id}>
            <img className={s.imgstyle} src={flag} alt="1234" />
            <h4>{name}</h4>
            <p className={s.pc}>Continent: {region}</p>
            <p className={s.pp}>Population: {population}</p>
        </div>
    );
}
