import React, {Component} from 'react';


class Name extends Component{
    render(){
        return(
            <h1> {this.props.firstname}, {this.props.lastname} and my age is {this.props.age} .</h1>
        )
    }
}

export default Name