// https://dog.ceo/api/breeds/image/random
let dogpicurl = 'https://dog.ceo/api/breeds/image/random'
let dogpic = document.getElementById("dogpic")
let picbtn = document.getElementById("picbtn")

picbtn.addEventListener('click', function() {
    let request = new XMLHttpRequest();
    request.addEventListener('load', function() {

        let result = JSON.parse(this.responseText)
        console.log(result.message)
        let imageurl = `<img src=${ result.message}>`
        dogpic.innerHTML = imageurl






    })
    request.open('GET', dogpicurl)
    request.send()

})