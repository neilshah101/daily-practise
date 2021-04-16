import { Component } from "react";
import { NavLink } from "react-router-dom";
import './BaseLayout.css'

export class BaseLayout extends Component {

    render() {
        return (
            <div>
                <Menu />
                    {this.props.children}
                <Footer />
            </div>
        )
    }
}

export class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div>
                    <h1>Book Barn</h1>
                </div>
                <div>
                    <button><NavLink to= "/">Home</NavLink></button>
                </div>
                <div>
                    <button><NavLink to= "/all-books">My-Books</NavLink></button>
                </div>
                <div>
                    <button><NavLink to= "/add-books">Add-Books</NavLink></button>
                </div>
            </div>
        )
    }
}

export class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small blue">

  
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="/"> Book-Barn</a>
  </div>
  

</footer>
        )
    }
}