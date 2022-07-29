import{
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
} from "../actions/actionType";

export const initialState = {
    country: [],
    allCountries: [],
    countriesAux: [],
    countriesDetail: {},
    activityFilter:[]
};

export default function countriesReducer( state = initialState, action){
    switch (action.type) {
        case GET_COUNTRIES:{
            return{
                ...state,
                country: action.payload,
                allCountries: action.payload
            }
        }
        case FILTER_CONTINENT: {
            const allCountries = state.country
            const continentFilter = allCountries === "All"
                ? allCountries
                : allCountries.filter(el => el.continent === action.payload)
            return {
                ...state,
                allCountries: continentFilter
            };
        }
        case GET_NAME_COUNTRIES: {
            return {
                ...state,
                allCountries: action.payload
            }
        }
        case DETAIL_COUNTRIES:
            return {
                ...state,
                countriesDetail: action.payload
            }
        case CREATE_ACTIVITY:{
            return { ...state, allActivity: action.payload }
        }
        case GET_ALL_ACTIVITIES:{
            return { ...state, allActivity: action.payload }
        }
        case ORDER_NAME:{
            const orderName = action.payload === "asc"
                ? state.country.sort((a,b) => a.name.localeCompare(b.name))
                // {
                //     if(a.name > b.name){
                //         return 1;
                //     }
                //     if(b.name > a.name){
                //         return-1
                //     }
                //     return 0;
                // }
                : state.country.sort((a,b) => b.name.localeCompare(a.name))

                return {
                    ...state,
                    country: orderName
                }
        }

        default:
            return state;
    }
}