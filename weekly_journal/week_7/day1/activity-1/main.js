const express = require('express')
const app = express()


app.get("/name", (req, res) => {
    let names = [{ "firstname": "John", "lastname": "Doe" }, { "firstname": "neil", "lastname": "shah" }]
    res.json(names)
})
app.get("/", (req, res) => {
    res.send("this is my first app using express.js")
})


app.listen(3000, () => {
    console.log("server is running")
})