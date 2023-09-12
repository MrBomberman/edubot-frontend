const defaultState = {
    isDarkMode: false
}
// actions
export const UPDATE_THEME_MODE = 'UPDATE_THEME_MODE'

export default function themeReducer(state = defaultState, action: any){
    switch(action.type){
        case UPDATE_THEME_MODE:
            return {...state, isDarkMode : action.payload}
        default: 
            return state
    }
}