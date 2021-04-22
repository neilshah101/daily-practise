import './DisplayLocation.css'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './stores/creators/actioncreators'

function LocationList(props) {

    useEffect(() => {
       props.onLoadLocations()
    },[])
    

    const locations = props.locations 
    const locationsItems = locations.map((location, index) => {
        return <div key ={index} className="card" style={{width: "18rem"}}>
            <div>
                latitude: {location.latitude}
            </div>
            <div>
                longitude: {location.longitude}
            </div>
            <div>
                <button onClick = {() => actionCreators.handleOnDelete(location.geo_id)}>delete this location</button>
            </div><br></br>
        </div>
    })
    return(
        <div>
            <div>
                <h1 className="best-book-h1">All Locations</h1>
            </div>
            <div className="card_flex">
                {locationsItems}
            </div>
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadLocations: () => dispatch(actionCreators.loadLocations()),
        onHandleOnDelete: (geoId) =>dispatch(actionCreators.handleOnDelete(geoId))
    }
}

const mapStateToProps = (state) => {
    return {
        locations: state.locations
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationList)