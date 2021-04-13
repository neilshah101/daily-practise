import { Component } from "react";

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
                <h1>STEEPER VIEW CONTROL</h1>
                <button onClick = {this.handleDecrement} style={{color: "red"}}><h2> - </h2></button>
                <h1>{this.state.ctr}</h1>
                <button onClick = {this.handleIncrement} style={{color: "green"}}><h2> + </h2></button>
            </div>
        )
    }
}

export default Counter