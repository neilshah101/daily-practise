import React, { Component } from 'react'
import Books from './BooksList'

class App extends Component {
  constructor() {
    super()

    this.state = {
      books:[]
    }
  }

  componentDidMount() {

    fetch('http://localhost:8080/all-books')
    .then(response => response.json())
    .then(results => {
      this.setState({
        books: results
      })
    })
  }
  render(){
    return(
      <div>
        <h1>Books List</h1>
        <Books books= {this.state.books}/>
      </div>
    )
  }
}


export default App