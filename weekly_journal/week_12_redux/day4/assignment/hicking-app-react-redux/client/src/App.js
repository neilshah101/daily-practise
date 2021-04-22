import { useEffect,useState, setState } from 'react'
import LocationList from './DisplayLocation'
import './App.css'


function App() {
  
  const [latitude, setLatitude] = useState (null)
  const [longitude, setLongitude] = useState (null)


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {

      setLatitude (position.coords.latitude)
      setLongitude (position.coords.longitude) 
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });

  })

  const handleSave =() => {
    console.log("hello")
    fetch ('http://localhost:8081/add-location',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            latitude: latitude,
            longitude: longitude,
            
        })
    }).then(response => response.json())
    .then(result => {
        if(result.success) {
          alert("Your Location Has Been Added to Database")
         
            
        }
    })
  }

    return (
      <div className="best-book-h1">
        <div>
          <h1 className="best-book-h1">HIKING APP</h1>
        </div>
        <div>
          <button onClick = {handleSave} >SAVE MY LOCATION</button>
        </div>
        <div>
          <LocationList />
        </div>
      </div>
    );
  
}


export default App
