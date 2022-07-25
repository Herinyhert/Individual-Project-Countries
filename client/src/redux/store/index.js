import { createStore,  applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import  countriesReducer from "../reducer";

const store = createStore( 
    countriesReducer,
    composeWithDevTools(applyMiddleware(thunk))
    );

export default store;