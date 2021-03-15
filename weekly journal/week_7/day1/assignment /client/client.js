let tasktextbox = document.getElementById('tasktextbox');
let prioritytextbox = document.getElementById('prioritytextbox');
let datetextbox = document.getElementById('datetextbox');
let addbtn = document.getElementById('addbtn');
let pendingtasklist = document.getElementById('pendingtasklist');
let completedtasklist = document.getElementById('completedtasklist');


addbtn.addEventListener("click", function() {

    let title = tasktextbox.value
    let priority = prioritytextbox.value
    let date = datetextbox.value

    fetch('http://localhost:3000/todolist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                priority: priority,
                date: date
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
            let tasksitems = tasks.map((task) => {
                return `
                <div class="task">
                <div>title : ${task.title}</div>
                <div>priority : ${task.priority}</div>
                <div>date : ${task.date}</div>
                <button onclick="completethetask('${task}')" id="taskcheckbox">Mark As Complete</button><br>
                <button id="deletebutton">Delete</button><br><br>
                </div>
                `
            })
            pendingtasklist.innerHTML = tasksitems.join("")
        })

}

displaypendingtasks()