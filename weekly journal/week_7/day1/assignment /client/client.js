let tasktextbox = document.getElementById('tasktextbox');
let prioritytextbox = document.getElementById('prioritytextbox');
let datetextbox = document.getElementById('datetextbox');
let addbtn = document.getElementById('addbtn');
let pendingtasklist = document.getElementById('pendingtasklist');
let completedtasklist = document.getElementById('completedtasklist');


addbtn.addEventListener("click", function() {

    let title = tasktextbox.value.toUpperCase()
    let priority = prioritytextbox.value.toUpperCase()
    let datetext = datetextbox.value

    fetch('http://localhost:3000/todolist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                priority: priority,
                date: datetext
            })
        }).then(response => response.json())
        .then(result => {
            displaypendingtasks()
        })


})


function displaypendingtasks() {
    fetch('http://localhost:3000/todolist')
        .then(response => response.json())
        .then(tasks => {
            console.log(tasks)
            let counter = 0
            let taskitem = tasks.map((task) => {
                tasksitems = `
                <div class="task">
                <div>title : ${task.title}</div>
                <div>priority : ${task.priority}</div>
                <div>date : ${task.date}</div>
                <button id="deletebutton" onClick="deleteTask('${counter}')">Mark as complete/Delete</button><br><br>
                </div>
                `
                counter += 1
                return tasksitems
            })
            pendingtasklist.innerHTML = taskitem.join("")
        })

}

displaypendingtasks()


function deleteTask(num) {
    fetch('http://localhost:3000/todolist', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            number: num
        })
    })

    .then(response => response.json())
        .then(result => {
            alert("The Selected Task Is Deleted")
            displaypendingtasks()
        })

}