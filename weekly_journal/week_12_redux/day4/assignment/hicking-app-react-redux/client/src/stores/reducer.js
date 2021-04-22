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
        case 'Get_All_Locations':
            return {
                ...state.filter(locations => locations !== action.payload)
                }
        default:
            return state
    }
}

export default reducer