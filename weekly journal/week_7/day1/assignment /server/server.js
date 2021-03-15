let todolist = [
    { title: "wash the car", priority: "high", date: "03-15-2021" },
    { title: "file the tax", priority: "high", date: "03-14-2021" },
    { title: "pay the bills", priority: "high", date: "03-13-2021" }
]


const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())



app.get('/todolist', (req, res) => {
    res.json(todolist)
})



app.post("/todolist", (req, res) => {

    const title = req.body.title
    const priority = req.body.priority
    const date = req.body.date

    const todoitem = { title: title, priority: priority, date: date }
    todolist.push(todoitem)

    res.json({ message: "item is added" })

})


app.listen(3000, () => {
    console.log("server is on")
})