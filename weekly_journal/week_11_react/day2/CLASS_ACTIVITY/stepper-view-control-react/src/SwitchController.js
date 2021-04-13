import { Component } from "react";


class SwitchController extends Component {


    constructor () {
        super ()

        this.state = {
            view : false
        }


       
    }
    handleChange =() => {
            this.setState ({
                view : !this.state.view
                
            })
    }


    render() {
        return (
            <div>
                <h1>Switch Controller</h1>
                <button onClick = {this.handleChange}>{this.state.view ? "ON" : "OFF"}

</button>
            </div>
        )
    }
}

export default SwitchController