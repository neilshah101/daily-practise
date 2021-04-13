import React, { Component} from 'react'
import Counter from './Counter'
import SwitchController from './SwitchController'


class App extends Component {
  render() {
    return (
      <div>
          
          <Counter/>
          <SwitchController/>
      </div>
    )
  }
}



export default App