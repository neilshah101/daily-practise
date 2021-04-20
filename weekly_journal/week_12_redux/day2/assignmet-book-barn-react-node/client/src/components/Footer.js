import { Component } from "react";
import { NavLink } from "react-router-dom";

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

export default Footer