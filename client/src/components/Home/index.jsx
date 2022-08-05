import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getCountries, filterCountriesContinent, orderName, orderPopulation, filterByActivity, getAllActivities } from "../../redux/actions"
import Card from "./Card";
import Paginado from "./Paginado";
import SearhBar from "./SearhBar";
import { Link } from "react-router-dom";
import s from "../Home/homeStyle.module.css"

export default function Home(){

    const dispach= useDispatch()
    const allTodo= useSelector(state=> state.allCountries)
    const activities = useSelector(state => state.activity)
    const [currentPage, setCurrentPage] = useState(1)
    //const countriesPorPage  = currentPage === 1 ? 9 : 10
    // const indexOfLastCountries = currentPage * countriesPorPage // 9
    // const indexOfFristCountries = indexOfLastCountries - countriesPorPage //0
    // const currentCountries = allTodo.slice(indexOfFristCountries, indexOfLastCountries)
    let currentCountries
    if(currentPage === 1){
        currentCountries = allTodo.slice(0, 9)
    }else{
        currentCountries = allTodo.slice(9 + (currentPage - 2) * 10, 19 + (currentPage - 2) * 10 )
    }
    const [order, setOrder]= useState("")

    


    const paginado = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(()=>{dispach(getCountries())},[dispach])
    useEffect(()=>{dispach(getAllActivities())},[dispach])

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

    function handlePopulation(e){
        e.preventDefault();
        dispach(orderPopulation(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    }

    function handlefilterByActivities(e){
        e.preventDefault();
        dispach(filterByActivity(e.target.value))
    }

    return(
        <div className={s.home}>

            <div className={s.NavSup}><h1>Countries</h1>
                <Link to="/activities"><button> Crear</button></Link>
            </div>

            <div className={s.NavLeft}>
                <div className={s.search}>
                    <SearhBar />
                </div>
                <div className={s.OrderCountries}>
                    <label> Ordenamiento: </label>
                    <br />
                    <input type="radio" name="ordenamiento" value="asc" onChange={e => handleNameSort(e)} />Ascendente
                    <br />
                    <input type="radio" name="ordenamiento" value="des" onChange={e => handleNameSort(e)} />Descendente
                </div>
                <div className={s.OrderCountries}>
                    <label> Population: </label>
                    <br />
                    <input type="radio" name="ordenamiento1" value="asc" onChange={e => handlePopulation(e)} />Ascendente
                    <br />
                    <input type="radio" name="ordenamiento1" value="des" onChange={e => handlePopulation(e)} />Descendente
                </div>
                <div className={s.FilterCountries}>
                    <label>Filter by Continent:</label>
                        <br />
                        <input type="radio" name="FilterCountries" value="All" onChange={e => handleOnClick(e)} />Todos
                        <br />
                        <input type="radio" name="FilterCountries" value="Antarctica" onChange={e => handleFilterContinent(e)} />Antartida
                        <br />
                        <input type="radio" name="FilterCountries" value="Oceania" onChange={e => handleFilterContinent(e)} />Oceania
                        <br />
                        <input type="radio" name="FilterCountries" value="Africa" onChange={e => handleFilterContinent(e)} />Africa
                        <br />
                        <input type="radio" name="FilterCountries" value="Asia" onChange={e => handleFilterContinent(e)} />Asia
                        <br />
                        <input type="radio" name="FilterCountries" value="Europe" onChange={e => handleFilterContinent(e)} />Europa
                        <br />
                        <input type="radio" name="FilterCountries" value="South America" onChange={e => handleFilterContinent(e)} />America Sur
                        <br />
                        <input type="radio" name="FilterCountries" value="North America" onChange={e => handleFilterContinent(e)} />America Norte
                        <br />
                </div>
                <div className={s.filterActivity}>
                    <select onChange={e => handlefilterByActivities(e)}>
                        <option value="" disable selected hidden>{""}Actividades turísticas</option>
                        <option value="All">Todas</option>
                        {activities.map((a) => (<option key={a.id} value={a.name}> {a.name} </option>))}
                    </select>
                </div>
            </div>
            <div className={s.paginado}>
                <Paginado
                    countriesPorPage={10}
                    allTodo={allTodo.length}
                    paginado={paginado}
                    // currentPage={currentPage}
                />
            </div>
           <div className={s.cardd2}>
           {
                currentCountries?.map(el => {
                    return (
                        <fragment>
                            <Link to={`/countries/${el.id}`}>
                                <Card
                                    key={el.id}
                                    name={el.name}
                                    flag={el.flag}
                                    region={el.region}
                                    capital={el.capital}
                                    id={el.id}
                                    population={el.population}
                                />
                            </Link>
                        </fragment>
                    )

                }
                )
            }
           </div>
        </div>
    )
}