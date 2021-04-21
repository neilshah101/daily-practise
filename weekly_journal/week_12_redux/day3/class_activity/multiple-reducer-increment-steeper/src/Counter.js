import React from 'react';
import { connect } from 'react-redux'
import { useState } from 'react'
import * as actionCreators from './stores/creators/actionCreators'



function Counter(props) {

    const [value, setValue] = useState(0)

    const handleIncrement = () => {
        props.onIncrement()
        
    }


    return(
        <div>
            <div>
                <h3>IncerementDecrementCounter</h3>
            </div>
            
            <div>
                <button onClick = {handleIncrement} >Increment</button>
            </div>
            
        </div>
   
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement:() => dispatch(actionCreators.incrementCounter())
    }
}

export default connect(null, mapDispatchToProps)(Counter)