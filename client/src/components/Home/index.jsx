import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getCountries, filterCountriesContinent, orderName } from "../../redux/actions"
import Card from "./Card";
import Paginado from "./Paginado";
import { Link } from "react-router-dom";
import "../Home/homeStyle.css"


export default function Home(){

    const dispach= useDispatch()
    const allTodo= useSelector(state=> state.allCountries)
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPorPage, setCountriesPorPage] = useState(10)
    const indexOfLastCountries = currentPage * countriesPorPage // 9
    const indexOfFristCountries = indexOfLastCountries - countriesPorPage //0
    const currentCountries = allTodo.slice(indexOfFristCountries, indexOfLastCountries)
    const [order, setOrder]= useState("")

    


    const paginado = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(()=>{dispach(getCountries())},[dispach])

    function handleOnClick(e){
        e.preventDefault();
        dispach(getCountries())
    }

    function handleFilterContinent(e){
        dispach(filterCountriesContinent(e.target.value))
    }

    function handleNameSort(e){
        e.preventDefault()
        dispach(orderName(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }

    return(
        <div>
            <div>
                <Link to="/activity">Crear actividad</Link>
                <h1>Estoy en Home</h1>
                <button onClick={e => { handleOnClick(e) }}> volver</button>
            </div>
            <div>
                <select onChange={e => handleNameSort(e)}>
                    <option value="All">Todos</option>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
                <select onChange={e => handleFilterContinent(e)}>
                    <option value="All">Todos</option>
                    <option value="North America">America Norte</option>
                    <option value="South America">America Sur</option>
                    <option value="Europe">Europa</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctica">Antartida</option>
                </select>
                <select>
                    <option value="All">Selectione</option>
                    
                </select>
            </div>
           <div>
           <Paginado
            countriesPorPage ={countriesPorPage}
            allTodo={allTodo.length}
            paginado={paginado}
            />
           </div>
            {
                currentCountries?.map(el => {
                    return (
                        <fragment>
                            <Link to={"/home" + el.id}>
                                <Card
                                    key={el.id}
                                    name={el.name}
                                    flag={el.flag}
                                    region={el.region}
                                />
                            </Link>
                        </fragment>
                    )
                    
                }
                )
            }
            <p>estoy en card</p>
        </div>
    )
}