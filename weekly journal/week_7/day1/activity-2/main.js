const express = require('express')
const app = express()

app.get("/:org/cohort/:year", (req, res) => {
    const org = req.params.org
    const year = req.params.year
    res.send("I study " + org + " " + year + " cohort")
})

app.listen(3000, () => {
    console.log("Server is running...")
})