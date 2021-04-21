import React from 'react';
import DisplayCounter from './DisplayCounter'
import Counter from './Counter'
import RandomImage from './RandomImage'
function App() {
  return(
    <div>
      <div>
        <h1>Incerement </h1>
      </div>
      <div>
        <h1><Counter /></h1>
      </div>
      <div>
        <h1><DisplayCounter /></h1>
      </div>
      <div>
        <h1><RandomImage /></h1>
      </div>
    </div>
  )
}


export default App