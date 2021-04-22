import * as actionTypes from '../actions/actionTypes'


export const loadLocations = () => {

    return (dispatch) => {

        fetch('http://localhost:8081/all-location')
            .then(response => response.json())
            .then(geos => {
                dispatch({type: actionTypes.Get_All_Locations, payload: geos})
            })
    }

}
export const  handleOnDelete = (geoId) => {
    fetch(`http://localhost:8081/delete-location/${geoId}`,{
            method:'DELETE'
        
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                alert("Location  Is Deleted")
                
               
            }
        })
}

