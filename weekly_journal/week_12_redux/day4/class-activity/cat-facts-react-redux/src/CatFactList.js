import { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../src/stores/creators/actionCreators'


function CatFactList(props) {
    useEffect(() => {
        props.onLoadFacts()
    }, [])

    const facts = props.facts 
    const factsItems = facts.map((fact, index) => {
        return <div key ={index}>
            <li>{fact.type}</li>
        </div>
    })
    
    return(
        <div>
            <div>
                <h1>cat facts</h1>
            </div>
            <div>
                {factsItems}
            </div>
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadFacts: () => dispatch(actionCreators.loadFacts())
    }
}

const mapStateToProps = (state) => {
    return {
        facts: state.facts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatFactList)