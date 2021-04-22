import * as actionTypes from '../actions/actionTypes'

export const loadFacts = () => {
    return(dispatch) => {
        
        fetch('https://cat-fact.herokuapp.com/facts')
            .then(response => response.json())
            .then (facts => {
                dispatch ({type:actionTypes.Facts_Loaded, payload: facts})
            })
    }
}