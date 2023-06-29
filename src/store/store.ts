import { combineReducers, legacy_createStore as createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import authReducer from "./authentication/authReducer";

const rootReducer = combineReducers({
    authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))