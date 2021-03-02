let emailtextbox = document.getElementById("emailtextbox")
let coffeetypetextbox = document.getElementById("coffeetypetextbox")
let coffeesizetextbox = document.getElementById("coffeesizetextbox")
let coffeepricetextbox = document.getElementById("coffeepricetextbox")
let btnsubmit = document.getElementById("btnsubmit")


const coffeorderurl = "https://troubled-peaceful-hell.glitch.me/orders"
let request = new XMLHttpRequest();
request.addEventListener("load", function() {
    console.log(this.responseText)
    let result = JSON.parse(this.responseText)
    console.log(this.responseText)
    let coffeorderitems = result.map(function(item) {
        return `
        <div id="coffeeorderlist">
        <div>
        email: ${item.email}
        </div>
        <div>
        type: ${item.type}
        </div>
        <div>
        size: ${item.size}
        </div>
        <div>
        price: ${item.price}
        </div>
        <div>
        <button id="delbtn" onclick="deletorder('${item.email}')">delete the order</button>
        </div>
        </div>
        

        `
    })
    displaycoffeorders.innerHTML = coffeorderitems.join("")
})
request.open('GET', coffeorderurl)
request.send()


btnsubmit.addEventListener("click", function() {
    const email = emailtextbox.value
    const coffeetype = coffeetypetextbox.value
    const coffeesize = coffeesizetextbox.value
    const coffeeprice = coffeepricetextbox.value

    const requestParams = {
        email: email,
        type: coffeetype,
        size: coffeesize,
        price: parseFloat(coffeeprice),
    }
    let postrequest = new XMLHttpRequest();
    postrequest.addEventListener("load", function() {
        console.log(this.responseText)
    })
    postrequest.open("POST", "https://troubled-peaceful-hell.glitch.me/orders")
    console.log(requestParams)
    console.log(JSON.stringify(requestParams))

    postrequest.setRequestHeader('Content-Type', 'application/json')
    postrequest.send(JSON.stringify(requestParams))

})

function deletorder(email) {
    const deletecoffeeorder = `https://troubled-peaceful-hell.glitch.me/orders/${email}`
    let deleterequest = new XMLHttpRequest();

    deleterequest.open('DELETE', deletecoffeeorder)
    deleterequest.send()
}