import React from "react";
import { Link } from "react-router-dom";
import './landingStyle.css';

export default function LandingPage(){
    return(
        <div className="landing-page">
        <h1 className="titlelanding" >COUNTRIES</h1>
        <Link to="/home">
            <button>INGRESAR</button>
        </Link>
    </div>
    )
}
