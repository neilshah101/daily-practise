let tasktextbox = document.getElementById('tasktextbox');
let addbtn = document.getElementById('addbtn');
let pendingtasklist = document.getElementById('pendingtasklist');
let completedtasklist = document.getElementById('completedtasklist');


addbtn.addEventListener('click', function() {
    //creates a div to place the task
    let task = document.createElement("div");
    task.className = "task"
    pendingtasklist.appendChild(task);


    //creates the checkbox
    let taskitem = document.createElement("input");
    taskitem.setAttribute("type", "checkbox");
    taskitem.className = "taskitem"
    task.appendChild(taskitem);

    //adds the task to the list
    let liitem = document.createElement("label");
    liitem.innerHTML = tasktextbox.value;
    task.appendChild(liitem);

    //adding remove button
    let removebtn = document.createElement("button")
    removebtn.innerHTML = "DELETE TASK";
    removebtn.className = "removebtn"
    task.appendChild(removebtn);
    removebtn.addEventListener('click', function() {
        this.parentElement.remove()
    })

    taskitem.addEventListener('click', function() {
        if (this.checked) {
            completedtasklist.appendChild(task)
        } else {
            pendingtasklist.appendChild(task)
        }
    })
})