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
                Tampoco  se so esta del todo bien jajaja cambie los will xq el will es como q puede hacer.. tiene la.voluntaad, pero despues ve, y el can es mas como q si hace...lo hace... y el done lo cambie xq tmb es como q hace referencia a algo hecho, pasado.
                </p>
            </div>
        </>
    )
}