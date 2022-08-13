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
} from "../actions/actionType";

export const initialState = {
    country: [],
    allCountries: [],
    countriesAux: [],
    activity: [],
    allActivity: [],
    countriesDetail: {},
    activityFilter: [],
    error: undefined
};

export default function countriesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES: {
            return {
                ...state,
                country: action.payload,
                allCountries: action.payload,
                error: undefined
            }
        }
        case FILTER_CONTINENT: {
            const allCountries = state.country
            const continentFilter = allCountries === "All"
                ? allCountries
                : allCountries.filter(el => el.continent === action.payload)
            return {
                ...state,
                allCountries: continentFilter,
                error: undefined
            };
        }
        case GET_NAME_COUNTRIES: {
            return {
                ...state,
                allCountries: action.payload,
                error: undefined
            }
        }
        case DETAIL_COUNTRIES:
            return {
                ...state,
                countriesDetail: action.payload,
                error: undefined
            }
        case CREATE_ACTIVITY: {
            return { ...state }
        }
        case GET_ALL_ACTIVITIES: {
            return { ...state, activity: action.payload, error: undefined }
        }
        case ORDER_NAME: {
            const orderName = action.payload === "asc"
                ? state.allCountries.sort((a, b) => a.name.localeCompare(b.name))
                // {
                //     if(a.name > b.name){
                //         return 1;
                //     }
                //     if(b.name > a.name){
                //         return-1
                //     }
                //     return 0;
                // }
                : state.allCountries.sort((a, b) => b.name.localeCompare(a.name))

            return { ...state, allCountries: orderName, error: undefined }
        }
        case ORDER_POPULATION: {
            let orderPopulationArray = action.payload === "asc"
                ?
                state.allCountries.sort(function (a, b) {
                    if (Number(a.population) > Number(b.population)) {
                        return 1;
                    }
                    if (Number(b.population) > Number(a.population)) {
                        return -1;
                    }
                    return 0;
                }) :
                state.allCountries.sort(function (a, b) {
                    if (Number(a.population) > Number(b.population)) {
                        return -1;
                    }
                    if (Number(b.population) > Number(a.population)) {
                        return 1;
                    }
                    return 0;
                })
            return { ...state, allCountries: orderPopulationArray, error: undefined }
        }
        case FILTER_ACTIVITY: {
            const allActivity = state.country
            //console.log(allActivity)
            const activitiesFiltered = allActivity.filter((c) => { return c.Activities.find((c) => { return c.name === action.payload }); });
            console.log("segundo", activitiesFiltered)

            if (action.payload === 'All') { return { ...state, allCountries: allActivity, error: undefined }}
            else { return { ...state, allCountries: activitiesFiltered, error: undefined }}
        }
        case SET_ERROR: {
            return { ...state, error: action.payload }
        }
        default:
            return state;
    }
}