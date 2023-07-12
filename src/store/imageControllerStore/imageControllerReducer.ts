const defaultState = {
    imagesArray: [],
    loading: false
}

export const UPDATE_SLIDER_IMAGES = 'UPDATE_SLIDER_IMAGES';
export const UPDATE_BOOK_IMAGE_LOADING = 'UPDATE_BOOK_IMAGE_LOADING';

export default function imageControllerReducer(state = defaultState, action:any){
    switch(action.type){
        case UPDATE_SLIDER_IMAGES:
            return {...state, imagesArray: [...action.payload]}
        case UPDATE_BOOK_IMAGE_LOADING: 
            return {...state, loading: action.payload}
        default: 
            return state
    }
}