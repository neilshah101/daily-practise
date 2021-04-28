import { Component } from "react";
import { connect } from 'react-redux'

export default function(ComposedComponent) {

    class Authenticate extends Component {

        constructor(props) {
            super(props)

            // if the user is not authenticated 
            if(!this.props.isAuthenticated) {
                this.props.history.push('/login')
            }

        }

        render() {
            return <ComposedComponent {...this.props} />
        }

    }

    const mapStateToProps = (state) => {
        return {
            isAuthenticated: state.authR.isAuthenticated
        }
    }

    return connect(mapStateToProps)(Authenticate) 

}
// import { useEffect } from 'react'
// import { connect } from 'react-redux'

// function Authenticate(ComposedComponent) {

//     useEffect((props) => {
//         props.isAuthenticated()
//      },[])
     
//     }
//     const handleAuth = (props) =>{
//         if(!props.isAuthenticated) {
//             props.history.push('/login')

//     }
//     return <ComposedComponent  />
        

    

    
    

// }



// const mapStateToProps = (state) => {
//     return {
//         isAuthenticated: state.isAuthenticated
//     }
// }

// export default connect(mapStateToProps)(Authenticate) 