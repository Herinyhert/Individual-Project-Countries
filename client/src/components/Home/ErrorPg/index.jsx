import React from "react";
import img2 from "../../../img/668cf1267cb06353f68e538e6bfc0912.jpg";
import s from './errorpg.module.css'
import { Link } from "react-router-dom";

export default function ErrorPg() {
    return(
        <div className={s.divContainer}>
            <h1>404</h1>
            <Link to="/home"><button className={s.buttonError}>come back home</button ></Link>
            <img className={s.imgPgError} src={img2} alt="error" />
            <h3>page address error</h3>
        </div>
    )
}