import axios from "axios";

import { 
    GET_COUNTRIES,
    GET_COUNTRY,
    GET_NAME_COUNTRIES,
    FILTER_ACTIVITY,
    CREATE_ACTIVITY,
    ORDER_POPULATION,
    GET_ALL_ACTIVITIES,
    DETAIL_COUNTRIES,
    FILTER_CONTINENT,
    ORDER_NAME
} from "./actionType";

//todos los paises
export function getCountries(){
    return async function(dispatch){
        let countries = await axios.get("http://localhost:3001/countries",{});
        return dispatch({ type: GET_COUNTRIES, payload:countries.data })}
};

export function getNameCountries(name){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3001/countries?name=" + name);
        return dispatch({
            type: GET_NAME_COUNTRIES,
            payload: json.data
        })
    }
}

export function getCountry(countryId){
    return async function(dispatch){
        const activities = await axios
            .get(`http://localhost:3001/countries/${countryId}`)
            .then(({ data }) => { return data.activities });

        const country = await axios
            .get(`http://localhost:3001/countries/${countryId}`)
            .then(({ data }) => {
                return{
                    id: data[0].cca3,
					name: data[0].name.common,
					flag: data[0].flags.svg,
					region: data[0].region,
					subregion: data[0].subregion,
					capital: data[0].capital,
					area: data[0].area,
					population: data[0].population,
                };
            } );

        const union = { ...country, activities };

        return dispatch({ type: GET_COUNTRY, payload: union })
    }
}

export function getAllActivities(){
    return function(dispatch){
        return axios.get('http://localhost:3001/activity')
        .then(getAllActivitiers => { return dispatch({ type: GET_ALL_ACTIVITIES, payload: getAllActivitiers.data})})}
}

export function datailCountries(payload){
    return async function(dispatch){
        var json= await axios.get(`http://localhost:3001/countries/${payload}`);
        return dispatch({ type: DETAIL_COUNTRIES, payload: json.data })}
}

export function createActivity(payload){
    return async function(dispatch){
        let json = await axios.post("http://localhost:3001/activity", payload);
        return dispatch({ type: CREATE_ACTIVITY, payload: json.data })
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