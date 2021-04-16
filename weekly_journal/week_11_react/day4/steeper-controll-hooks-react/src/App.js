import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return(
    <div>
      <h1>STEEPER VIEW CONTROL</h1>
      <button onClick = {handleDecrement} style={{color: "red"}}><h2> - </h2></button>
      <h1>{count}</h1>
      <button onClick = {handleIncrement} style={{color: "green"}}><h2> + </h2></button>
    </div>
)
}

export default App