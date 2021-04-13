import { Component } from 'react'
import './Menu.css'

class Menu extends Component {
    render() {
        return (
            <div className ="menu-container">
                <div className ="menu-box-logo">
                  <h1>BOOK BARN</h1>
                </div  >
                <div className ="menu-box">
                  <p>Home</p>
                </div >
                <div className ="menu-box">
                  <p>My Books</p>
                </div>
                <div className ="menu-box">
                  <p>Browse</p>
                </div>
                <div className ="menu-box">
                  <p>Community</p>
                </div>
                <div className ="menu-box">
                  <input type="text" placeholder ="Search books"/>
                </div>
            </div>
        )
    }
}

export default Menu