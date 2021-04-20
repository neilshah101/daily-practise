import React from 'react';
import { connect } from 'react-redux'
import { useState } from 'react'
import * as actionCreators from './store/creators/actionCreators'
import './Counter.css'

function Counter(props){

    const [value, setValue] = useState(0)

    const handleIncrement = () => {
        props.onIncrement()
        
    }

    const handleDecrement = () => {
        props.onDecrement()
    }

    const handleOnchange =(e) => {
        setValue(parseInt(e.target.value))
    } 

    const handleAdd = () => {
        props.onAdd(value)
    }

    const handleSub = () => {
        props.onSub(value)
    }

    const handleMult = () => {
        props.onMult(value)
    }
    return(
        <div className= "counter-container">
           <div className= "counter-box">
                <div>
                    <h3>IncerementDecrementCounter</h3>
                </div>
                <div className = "btn-container">
                    <div>
                        <button onClick = {handleIncrement}>Increment</button>
                    </div>
                    <div>
                        <button onClick = {handleDecrement}>Decrement</button>
                    </div>
                </div>
           </div>
           <div className= "counter-box">
                <div>
                    <h3>AddSubtractCounter</h3>
                </div>
                <div>
                    <input className = "input-container" type="text" onChange = {handleOnchange} placeholder="ADD AMOUNT TO CALCULATE"/>
                </div>
                <div className = "btn-container">
                    <div>
                        <button onClick = {handleAdd}>ADD</button>
                    </div>
                    <div>
                        <button onClick = {handleSub}>SUBTRACT</button>
                    </div>
                    <div>
                        <button onClick = {handleMult}>MULTIPLY</button>
                    </div>
                </div>
           </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement:() => dispatch(actionCreators.incrementCounter()),
        onDecrement:() => dispatch(actionCreators.decrementCounter()),
        onAdd:(value) => dispatch(actionCreators.addCounter(value)),
        onSub:(value) => dispatch(actionCreators.subtractCounter(value)),
        onMult:(value) => dispatch(actionCreators.multiplyCounter(value)),


    }
}

export default connect(null, mapDispatchToProps)(Counter)