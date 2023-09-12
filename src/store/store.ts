import { combineReducers, legacy_createStore as createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import authReducer from "./authentication/authReducer";
import imageControllerReducer from './imageControllerStore/imageControllerReducer';
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    authReducer,
    imageControllerReducer,
    themeReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))