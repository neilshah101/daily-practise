import * as actionTypes from '../actions/actionTypes'


const initialState ={
    favorite:[],
    
}

const reducer = (state = initialState, action) => {


    switch(action.type) {
        case actionTypes.onFavorite:{
            return {
                ...state,
                favorite: state.favorite.concat(action.payload)
            }
        }
        
        default: 
            return state 

    }
}


export default reducer