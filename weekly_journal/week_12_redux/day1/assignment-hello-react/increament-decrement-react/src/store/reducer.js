const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {

    if(action.type === 'INCREMENT') {
        return {
            ...state,
            count:state.count + 1

        }
    } else if(action.type === 'DECREMENT'){
        return {
            ...state,
            count:state.count - 1
        }
    } else if(action.type === 'ADD'){
        return{
            ...state,
            count: state.count + action.payload
        }
    } else if (action.type === 'SUB') {
        return{
            ...state,
            count: state.count - action.payload
        }
    }else if (action.type ==='MULT'){
        return {
            ...state,
            count:state.count * action.payload
        }
    }


    return state
}

export default reducer