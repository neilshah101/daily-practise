import React, {Component} from 'react';
import './Menu.css'

class Menu extends Component{
    render(){
        return(
            <div className = "menu-container">
                <div className="menu-box-logo">
                    <h1>Super Coding</h1>
                </div>
                <div className="menu-box">
                    <h3>Home</h3>
                </div>
                <div className="menu-box">
                    <h3>Categories</h3>
                </div>
            </div>
        )
    }
}

export default Menu