import React, { Component } from 'react'
import Menu from './Menu'
import Books from './Books'
import './App.css'


class App extends Component {

  constructor() {
    super()

    this.state = {
      books:[]
    }
  }
  
  componentDidMount() {

    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then (results => {
      this.setState ({
        books: results
      })
    })



  }


  
  render() {
    return (
      <div className="main-container">
        <Menu />
        <Books books= {this.state.books}/>
      </div>
    )
  }
}

export default App