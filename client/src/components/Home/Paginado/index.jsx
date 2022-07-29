import React from "react";
import s from "./paginado.module.css"

export default function Paginado({countriesPorPage, allTodo, paginado}){
    const pageNumber = [];

    for(let i=0; i<Math.ceil(allTodo/countriesPorPage); i++){
        pageNumber.push(i+1)
    }
    return(
        <nav>
            <ul>
                {pageNumber?.map(number =>(
                    <span key={number}>
                        <button className={s.buttonpage} onClick={()=> paginado(number)}>{number}</button>
                    </span>
                )
                )}
            </ul>
        </nav>
    )
}