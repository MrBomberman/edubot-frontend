const defaultState = {
    authToken: ''
}

export const SET_TOKEN = 'SET_TOKEN';

export default function authReducer(state = defaultState, action:any){
    switch(action.type){
        case SET_TOKEN:
            return {...state, authToken: action.token}
        default: 
            return state
    }
}