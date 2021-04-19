import React from 'react';
import { connect } from 'react-redux'
import './Display.css'

function DisplayCounter(props) {
    return(
        <div className= "display-container">
            <div>
                <h3>DisplayCounter</h3>
            </div>
            <div>
                <h3>{props.count}</h3>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(DisplayCounter)