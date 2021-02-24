const startersul = document.getElementById("startersul")
const entreesul = document.getElementById("entreeul")
const desserstul = document.getElementById("dessertul")

let starter = dishes.filter(function(dish) {
    return dish.course == "Starters"
})
console.log(starter)


let result = starter.map(function(dish) {
    return `<div class="dishes">
    <div class="image"><img  class="image" src="${dish.imageURL}" alt =""image of ${dish.title}></div>
    <div id = "titledescription">
    <div class= "title">${dish.title}</div>
    <div class = "description">${dish.description}</div>
    </div>
    <div class ="price">${dish.price}</div>
    </div>
    `
})
console.log(result)

startersul.innerHTML = result.join("")


let entree = dishes.filter(function(dish) {
    return dish.course == "Entrees"
})
console.log(entree)

let result1 = entree.map(function(dish) {
    return `<div class="dishes">
    <div class="image"><img  class="image" src="${dish.imageURL}" alt =""image of ${dish.title}></div>
    <div id = "titledescription">
    <div class= "title">${dish.title}</div>
    <div class = "description">${dish.description}</div>
    </div>
    <div class ="price">${dish.price}</div>
    </div>
    `
})
entreeul.innerHTML = result1.join("")




let dessert = dishes.filter(function(dish) {
    return dish.course == "Desserts"
})
console.log(dessert)

let result2 = dessert.map(function(dish) {
    return `<div class="dishes">
    <div class="image"><img  class="image" src="${dish.imageURL}" alt =""image of ${dish.title}></div>
    <div id = "titledescription">
    <div class= "title">${dish.title}</div>
    <div class = "description">${dish.description}</div>
    </div>
    <div class ="price">${dish.price}</div>
    </div>`
})
desserstul.innerHTML = result2.join("")