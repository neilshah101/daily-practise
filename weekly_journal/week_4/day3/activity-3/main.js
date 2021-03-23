const firstnametext = document.getElementById('firstname')
const lastnametext = document.getElementById('lastname')
const btnsubmit = document.getElementById('btnsubmit')
const displaytext = document.getElementById('displaytext')


btnsubmit.addEventListener('click', function() {
    const firstname = firstnametext.value
    const lastname = lastnametext.value

    displaytext.innerHTML = `hello ${firstname} ${lastname}`



})