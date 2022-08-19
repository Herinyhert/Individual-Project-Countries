import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNameCountries } from "../../../redux/actions";

import s from "./SearhBar.module.css"

export default function SearhBar(){

    const allTodo= useSelector(state=> state.country)
    
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e){ setName(e.target.value) }

    function handleSubmit(e){
        e.preventDefault()
        if(name){
           dispatch(getNameCountries(name))
           console.log(name)
           setName("")
        } else{ alert('the search cannot be performed if you do not enter a name')}
    }


    return(
            <div className={s.inputGroup}>
                <input required="" type="text" name="text" autocomplete="off" className={s.inputtt} value={name} 
                    onChange={(e) => handleInputChange(e)} list="idea" />
                <label className={s.userLabel}>Enter the country</label>
                <datalist id="idea">
                    {allTodo.map((country, i) => (
                        <option key={i} value={country.name} />
                    ))}
                </datalist>
                <button
                    className={s.button2}
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >Search</button>
            </div>
    )

}