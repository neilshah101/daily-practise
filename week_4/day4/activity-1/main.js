symboltextbox = document.getElementById("symboltextbox")
btnsubmit = document.getElementById("btnsubmit")
dispalyprice = document.getElementById("dispalyprice")

btnsubmit.addEventListener("click", function() {

    symbol = symboltextbox.value
    let quote = getStockQuote(symbol)
    console.log(quote)
    dispalyprice.innerHTML = quote.name + "  " + quote.price
    let intervalId = window.setInterval(function() {
        getStockQuote(symbol)
        dispalyprice.innerHTML = quote.name + "  " + quote.price
    }, 2000)

})