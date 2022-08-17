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
                    Countries is an application where you can see information of the 250 existing countries today. 
                    You can find it filtering by continent, activities or directly by name. You can also see the 
                    tourist activities that each one has, being able to create activities that can be do 
                    in one or in several countries in common.
                </p>
            </div>
        </>
    )
}