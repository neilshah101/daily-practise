import * as actionTypes from '../actions/actionTypes'
const initialState = {
    
    randomImages :[]
}


const reducer = (state = initialState, action) => {


    switch(action.type) {

        case 'ADD_RANDOM_IMAGE':
            return {
                ...state,
                randomImages: state.randomImages.concat(action.payload)

            }
        
    }
    return state 
}

export default reducer