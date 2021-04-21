import React from 'react';
import { connect } from 'react-redux'



function DisplayCounter(props) {
    return(
        <div>
            <div>
                <h3>
                    Display Counter
                </h3>
                <h3>
                   {props.count}
                </h3>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.counterR.count
    }
}

export default connect(mapStateToProps)(DisplayCounter)