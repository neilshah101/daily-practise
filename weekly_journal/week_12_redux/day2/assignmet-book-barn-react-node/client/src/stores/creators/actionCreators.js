import * as actionTypes from '../actions/actionTypes'

export const onAddToCart =(book) => {
    return {
        type: actionTypes.onAddToCart,
        payload : book
    }
}

export const onFavorite =(book) => {
    return {
        type: actionTypes.onFavorite,
        payload : book
    }
}