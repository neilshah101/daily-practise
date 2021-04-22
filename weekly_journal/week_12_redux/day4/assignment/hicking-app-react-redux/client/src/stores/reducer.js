const initialState = {
    locations: [],
    
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'Get_All_Locations':
            return {
                ...state,
                locations: action.payload
            }
        
        default:
            return state
    }
}

export default reducer