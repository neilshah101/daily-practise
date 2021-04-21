import * as actionTypes from '../actions/actionTypes'
const initialState = {
    count: 0,
    
}


const reducer = (state = initialState, action) => {


    switch(action.type) {

        case actionTypes.INCREMENT:
            return {
                ...state,
                count:state.count + 1
            }
        
    }
    return state
}

export default reducer