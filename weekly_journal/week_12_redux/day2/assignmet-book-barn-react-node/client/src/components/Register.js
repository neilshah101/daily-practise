import { useState } from 'react'


function Register(props) {


    const [credentials, setCredentials] = useState({})

    const handleChange = (e) => {
        setCredentials({
            ...credentials, 
            [e.target.name]: e.target.value
        })
    }

    const onHandleRegister = () => {
        fetch('http://localhost:8080/register', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(credentials)
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                alert("User Has Been Successfully Added")
                props.history.push('/')
            }
        })
    }


    return (
        <div>
            <h1>User Registration</h1>
            <input type="text" onChange = {handleChange} placeholder = "Username" name = "username" />
            <input type="password" onChange = {handleChange} placeholder = "Password" name = "password" />
            <input type="email" onChange = {handleChange} placeholder = "email" name = "email" />
            <button onClick = {onHandleRegister}>Register</button>
        </div>
    )




}

export default Register