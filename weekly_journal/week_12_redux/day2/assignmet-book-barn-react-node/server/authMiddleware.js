const express = require('express')
const cors = require('cors')
const app = express() 
const pgp = require('pg-promise')()
const jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')
const fetch = require('node-fetch')
const connectionString = 'postgres://localhost:5432/booksreactdb'
const db = pgp(connectionString)



function authenticate(req, res, next) {

    
    // const password = req.body.password;

    let headers = req.headers['authorization']
    if(headers) {
        
        const token = headers.split(' ')[1]
        const decoded = jwt.verify(token, 'ITSSUPERSECRET')
        if(decoded) {
            const username = decoded.username
            db.one('SELECT user_id, username, password FROM users WHERE username = $1', [username])
            .then((user) => {
                if(user) {
                    next() 
                }
            
        }).catch((error) => {
            console.log(error)
            res.send('User not found!')
        })
    } else {
        res.json({error: 'Required headers are missing...'})
    }  
}
}
module.exports = authenticate