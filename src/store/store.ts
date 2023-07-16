import { combineReducers, legacy_createStore as createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import authReducer from "./authentication/authReducer";
import imageControllerReducer from './imageControllerStore/imageControllerReducer';

const rootReducer = combineReducers({
    authReducer,
    imageControllerReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))