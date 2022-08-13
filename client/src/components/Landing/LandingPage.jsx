import React from "react";
import { Link } from "react-router-dom";
import s from './landingStyle.module.css';

export default function LandingPage() {
    return (
        <>
            <div className={s.landingpg}>
                <h1 className={s.titlelanding} >COUNTRIES</h1>
                <Link to="/home"><button className={s.getInto}>Get into</button></Link>
                <Link to="/dedication"><button className={s.dedication}>Dedication</button></Link>
            </div>
            <div className={s.abs}>
                <p>
                Countries is an application where you will see information of the 250 existing countries today, you will find it filtering by continent, activities or directly by name, you can also see the tourist activities that each one has, being able to create or delete activities that can be done in one or in several countries in common
                </p>
            </div>
        </>
    )
}