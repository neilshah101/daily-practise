import * as actionTypes from '../stores/actions/actionTypes'


const initialState ={
    facts:[],
    
}

const reducer = (state = initialState, action) => {


    switch(action.type) {
        case actionTypes.Facts_Loaded:{
            return {
                ...state,
                facts: state.facts.concat(action.payload)
            }
        }
        
        default: 
            return state 

    }
}


export default reducer