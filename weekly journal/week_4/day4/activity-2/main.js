const timetextbox = document.getElementById("timetextbox")
const btnsubmit = document.getElementById("btnsubmit")
const timerdisplay = document.getElementById("timerdisplay")



btnsubmit.addEventListener("click", function() {
    let timersecond = timetextbox.value
    let counter = timersecond
    let intervalid = window.setInterval(function() {
        counter--
        timerdisplay.innerHTML = `${counter}`
        if (counter == 0) {
            window.clearInterval(intervalid)
        }
    }, 1000)

})