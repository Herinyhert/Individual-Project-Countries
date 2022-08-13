import axios from "axios";

import { 
    GET_COUNTRIES,
    GET_NAME_COUNTRIES,
    FILTER_ACTIVITY,
    CREATE_ACTIVITY,
    ORDER_POPULATION,
    GET_ALL_ACTIVITIES,
    DETAIL_COUNTRIES,
    FILTER_CONTINENT,
    ORDER_NAME,
    SET_ERROR
} from "./actionType";

//todos los paises
export function getCountries(){
    return async function(dispatch){
        let countries = await axios.get("http://localhost:3001/countries",{});
        return dispatch({ type: GET_COUNTRIES, payload:countries.data })}
};

export function getNameCountries(name){
    return async function(dispatch){
        try {
            let json = await axios.get("http://localhost:3001/countries?name=" + name,{});
            return dispatch({
                type: GET_NAME_COUNTRIES,
                payload: json.data
            })            
        } catch (error) {
            dispatch({type: SET_ERROR, payload: error})
            //console.log("estoy aqui", error)
        }
    }
}

export function getAllActivities(){
    return async (dispatch) => {
        var json = await axios.get('http://localhost:3001/activities')
       return dispatch({ type: GET_ALL_ACTIVITIES, payload: json.data})}
}

export function datailCountries(payload){
    return async function(dispatch){
        var json= await axios.get(`http://localhost:3001/countries/${payload}`);
        return dispatch({ type: DETAIL_COUNTRIES, payload: json.data })}
}

export function createActivity(payload){
    return async function(){
        let json = await axios.post("http://localhost:3001/activities", payload);
        return ({ type: CREATE_ACTIVITY, payload: json.data })
    }
}

export function orderPopulation(payload){
    return { type: ORDER_POPULATION, payload }
}

export function orderName(payload){
    return{ type: ORDER_NAME, payload }
}

export function filterCountriesContinent(payload){
    return{ type:FILTER_CONTINENT, payload }
}

export function filterByActivity(payload){
    return{ type: FILTER_ACTIVITY, payload }
}

