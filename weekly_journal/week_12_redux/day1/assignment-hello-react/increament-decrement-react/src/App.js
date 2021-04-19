import React from 'react';
import Counter from './Counter'
import DisplayCounter from './DisplayCounter'
import './App.css'

function App(){
  return(
    <div className ="main-container">
      <div className ="header-container">
        <h1>App</h1>
      </div>
      <div>
        <h1><Counter /></h1>
      </div>
      <div>
        <h1><DisplayCounter /></h1>
      </div>
    </div>
  )
}


export default App;