import * as actionTypes from './actions/actionTypes'
const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                count:state.count + 1
            }
        
        case actionTypes.DECREMENT:
            return {
                ...state,
                count:state.count - 1
            }

        case actionTypes.ADD:
            return {
                ...state,
                count: state.count + action.payload
            }

        case actionTypes.SUB:
            return {
                ...state,
                count: state.count - action.payload
            }

        case actionTypes.MULT:
            return {
                ...state,
                count:state.count * action.payload
            }
    }

    return state
}

export default reducer