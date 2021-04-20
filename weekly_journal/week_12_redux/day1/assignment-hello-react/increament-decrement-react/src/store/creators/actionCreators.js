import * as actionTypes from '../actions/actionTypes'


export const incrementCounter = () => {
    return {
        type:actionTypes.INCREMENT
    }
}

export const decrementCounter = () => {
    return {
        type:actionTypes.DECREMENT
    }
}

export const addCounter = (payload) => {
    return {
        type:actionTypes.ADD,
        payload : payload
    }
}

export const subtractCounter = (payload) => {
    return {
        type:actionTypes.SUB,
        payload : payload
    }
}

export const multiplyCounter = (payload) => {
    return {
        type:actionTypes.MULT,
        payload : payload
    }
}