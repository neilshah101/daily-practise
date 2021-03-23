let firstname = document.getElementById("firstname")
console.log(firstname)

let lastname = document.getElementById("lastname")
console.log(lastname)

let fnln = document.getElementById("fnln")
console.log(fnln)

let btnsubmit = document.getElementById("btnsubmit")
btnsubmit.addEventListener("click", function() {
    console.log(firstname.value, lastname.value)
    fnln.innerHTML = firstname.value + "  " + lastname.value
})