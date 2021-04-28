import { useState } from 'react'
import { connect } from 'react-redux'



function Login(props) {

    const [credentials, setCredentials] = useState({})

    const handleChange = (e) => {
        setCredentials({
            ...credentials, 
            [e.target.name]: e.target.value
        })
    }

    const onHandleLogin = () => {
        fetch('http://localhost:8080/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(credentials)
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                const token = result.token 
                console.log(token)
                props.onLogin()
                localStorage.setItem("jsonwebtoken", token)
                localStorage.setItem("username", result.username)
                localStorage.setItem("user_id", result.user_id)
                props.history.push(`/all-books/${result.user_id}`)
                // props.onLogin()
            }
        })
    }

    return (
        <div>
            <div>
                <h1>Login</h1>
            </div>
            <div>
                <input type="text" onChange = {handleChange} placeholder = "Username" name = "username" />
            </div>
            <div>
                <input type="password" onChange = {handleChange} placeholder = "Password" name = "password" />
            </div>
            <div>
                <button onClick = {onHandleLogin}>Login</button>
            </div>
            <div>
                <button><a href="/register">sign-up(if not already user)</a></button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: () => dispatch({type: 'LOGIN'})
        
    }
}



export default connect(null,mapDispatchToProps)(Login)



