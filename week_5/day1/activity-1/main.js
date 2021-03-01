// https://cat-fact.herokuapp.com/facts

const catfacts = document.getElementById("catfacts")

const catfactsurl = 'https://cat-fact.herokuapp.com/facts'

let request = new XMLHttpRequest();
request.addEventListener('load', function() {
    console.log(this.responseText)

    let result = JSON.parse(this.responseText)
    let catfactitems = result.map(function(fact) {
        return `${fact.text}`
    })

    catfacts.innerHTML = catfactitems.join("")


})

request.open('GET', catfactsurl)
request.send()