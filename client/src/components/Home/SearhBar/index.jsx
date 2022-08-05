import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../../../redux/actions";

import s from "./SearhBar.module.css"

export default function SearhBar(){

    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e){ setName(e.target.value) }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameCountries(name))
        console.log(name)
        setName("")
    }

    return(
        // <div className={s.SearhBar}>
        //     <input 
        //     type="text"
        //     placeholder="Ingresa el Pais"
        //     value = {name}
        //     onChange = { (e) => handleInputChange(e) }
        //     />

        //     <button 
        //         type="submit"
        //         onClick={ (e) => handleSubmit(e) }
        //         > Buscar</button>

        // </div>
            <div className={s.inputGroup}>
                <input required="" type="text" name="text" autocomplete="off" className={s.inputtt} value={name} 
                    onChange={(e) => handleInputChange(e)} />
                <label className={s.userLabel}>Ingresa el Pais</label>
                <button
                    className={s.button2}
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                > Buscar</button>
            </div>
    )

}