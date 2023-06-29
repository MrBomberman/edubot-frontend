const defaultState = {
    authToken: ''
}

export const AUTH_TOKEN = 'AUTH_TOKEN';

export default function authReducer(state = defaultState, action:any){
    switch(action.type){
        case AUTH_TOKEN:
            return {...state, authToken: action.token}
        default: 
            return state
    }
}