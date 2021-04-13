import { Component, component } from "react";

class Counter extends Component {


    constructor() {
        super()

        this.state = {
            ctr:0
        }
    }


    handleIncrement = () => {
        this.setState({
        ctr: this.state.ctr + 1
    })
   }

   handleDecrement = () => {
    this.setState({
    ctr: this.state.ctr - 1
})
}

    render() {
        return(
            <div>
                <button onClick = {this.handleDecrement}> - </button>
                <h1>{this.state.ctr}</h1>
                <button onClick = {this.handleIncrement}> + </button>
            </div>
        )
    }
}

export default Counter