let displayportfolio = document.getElementById("displayportfolio")
let titletextbox = document.getElementById("title")
let symboltextbox = document.getElementById("symbol")
let pricetextbox = document.getElementById("price")
let quantitytextbox = document.getElementById("quantity")
let sbtbtn = document.getElementById("sbtbtn")



const portfoliourl = "https://endurable-bead-polo.glitch.me/stocks"
let request = new XMLHttpRequest();
request.addEventListener("load", function() {
    console.log(this.responseText)
    let result = JSON.parse(this.responseText)
    console.log(this.responseText)
    let portfolioitems = result.map(function(item) {
        return `
<div>
title : ${item.title}
</div>
<div>
symbol: ${item.symbol}
</div>
<div>
price: ${item.price}
</div>
<div>
quantity:${item.quantity}
</div><br><br>
`
    })
    displayportfolio.innerHTML = portfolioitems.join("")
})
request.open('GET', portfoliourl)
request.send()

sbtbtn.addEventListener("click", function() {
    const title = titletextbox.value
    const symbol = symboltextbox.value
    const price = pricetextbox.value
    const quantity = quantitytextbox.value

    const requestParams = {
        "title": title,
        "symbol": symbol,
        "price": parseFloat(price),
        "quantity": parseInt(quantity)
    }

    let postrequest = new XMLHttpRequest();
    postrequest.addEventListener("load", function() {
        console.log(this.responseText)

    })
    postrequest.open("POST", "https://endurable-bead-polo.glitch.me/stocks")
    console.log(requestParams)
    console.log(JSON.stringify(requestParams))

    postrequest.setRequestHeader('Content-Type', 'application/json')
    postrequest.send(JSON.stringify(requestParams))

})