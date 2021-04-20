import { Component } from "react";
import {ConnectedMenu} from "./Menu"
import Footer from "./Footer"
import './BaseLayout.css'

export class BaseLayout extends Component {

    render() {
        return (
            <div>
                <ConnectedMenu />
                    {this.props.children}
                <Footer />
            </div>
        )
    }
}



