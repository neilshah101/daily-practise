const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Task =require('./schemas/task')
app.use(cors())
app.use(express.json())



mongoose.connect('mongodb+srv://dbUser:dbUser@cluster0.leen2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}, (error) => {
    if(!error) {
        console.log('Successfully connected to MongoDB Database')
    } else {
        console.log(error)
    }
})


app.get('/tasks', (req, res) => {
    Task.find({}, (error, posts) => {
        if(error) {
            res.json({error: 'Unable to fetch posts!'}) 
        } else {
            res.json(posts)
        }
    })
})

app.post ('/tasks',(req,res) =>{
    const title = req.body.title 
    const priority = req.body.priority 

    let task = new Task({
        title: title, 
        priority: priority 
})
    task.save((error) => {
        if(error) {
            res.json({error: 'Unable the save!'})
        } else {
            res.json({success: true, message: 'New task Saved'})
        }
    })

})


app.delete('/tasks/:taskId', (req, res) => {

    const taskId = req.params.taskId 

    Task.remove({
        _id: taskId
    }, (error, result) => {
        if(error) {
            res.json({error: 'Unable to delete post'})
        } else {
            res.json({success: true, message: 'Post deleted successfully!'})
        }
    })

})


app.put('/update-task/:taskId', (req, res) => {

    const taskId = req.params.taskId 
    const title = req.body.title 
    const priority = req.body.priority

    const updatedTask = {
        title: title, 
        priority: priority 
    }

    Task.findByIdAndUpdate(taskId, updatedTask, (error, result) => {
        if(error) {
            res.json({error: 'Unable to updated'})
        } else {
            res.json({success: true})
        }
    })

})



app.listen(8080, () => {
    console.log('Server is running...')
})