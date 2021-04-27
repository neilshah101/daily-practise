import { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'



export class Menu extends Component {
    render() {
        return (
            <div className="navbar sticky navbar-expand-lg navbar-light bg-light">
                <div>
                    <h1>Book Barn</h1>
                </div>
                <div>
                    <button><NavLink to= "/">Home</NavLink></button>
                </div>
                {this.props.isLoggedIn ?<div>
                    <button><NavLink to= "/all-books/:user_id">All-Books</NavLink></button>
                </div>:null}
                {this.props.isLoggedIn ?<div>
                    <button><NavLink to= "/add-books">Add-Books</NavLink></button>
                </div>:null}
                {this.props.isLoggedIn ?<div>
                    <button><NavLink to= "/my-cart">My-Cart</NavLink></button>
                </div>:null}
                {this.props.isLoggedIn ?<div>
                    <button ><NavLink to= "/my-favorite-book">My-Favorite</NavLink></button>
                </div>:null}
                {!this.props.isLoggedIn ?<div>
                    <button><a href="/register">Register</a></button>
                </div>:null}
                {!this.props.isLoggedIn ?<div>
                    <button onClick = {() => this.props.onLogin()}><a href="/login">Login</a></button>
                </div>:null}
                {this.props.isLoggedIn ?<div>
                    <button onClick = {() => this.props.onLogout()}><NavLink to= "/">Logout</NavLink></button>
                </div>:null}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        onLogout: () => dispatch({type: 'LOGOUT'})
    }
}
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authR.isAuthenticated 
    }
}

export const ConnectedMenu = connect(mapStateToProps, mapDispatchToProps)(Menu);