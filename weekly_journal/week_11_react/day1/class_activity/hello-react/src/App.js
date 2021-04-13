import React, { Component } from 'react';
import './App.css'
import Name from './Name'
import FriendList from './Friends'

class App extends Component {
  
  render() { 

    const friends=[
      {name: "john doe"},
      {name: "mary doe"},
      {name: "alex doe"}
     ]
    return(
      <div>
        <div>
          <h1>hello neil</h1>
        </div>
        <div>
          <h2>04/12/2021</h2>
        </div>
        <div>
          <Name firstname = "neil" lastname = "shah" age = "31yrs"/>
        </div>
        <div>
          <FriendList allFriends = {friends}/>
        </div>
      </div>
    )
  }
}

export default App