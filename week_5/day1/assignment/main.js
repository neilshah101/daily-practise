let movieimage = document.getElementById("movieimage")
let moviename = document.getElementById("moviename")
let movieinfo = document.getElementById("moviesdetails1")


const moviesdetails = 'http://www.omdbapi.com/?s=Batman&page=2&apikey=a9c1649f'
let request = new XMLHttpRequest();
request.addEventListener('load', function() {
    // console.log(this.responseText)
    let result = JSON.parse(this.responseText)
    let movieitems = result.Search.map(function(item) {
        return `<div id="movie">
        <div>
        <img src=${item.Poster}>
        </div><br>
        <div id ="titlename">
        ${item.Title}
        </div><br>
        <button id="movieinfo" onClick="getimdbdetails('${item.imdbID}')" >get movie details</button><br><br>
        </div>`
    })
    moviename.innerHTML = movieitems.join("")
})
request.open('GET', moviesdetails)
request.send()




function getimdbdetails(imdbID) {
    console.log(imdbID)
    const newmoviedetails = `http://www.omdbapi.com/?i=${imdbID}&apikey=a9c1649f`
    let newrequest = new XMLHttpRequest();
    newrequest.addEventListener('load', function() {
        console.log(this.responseText)
        let newresult = JSON.parse(this.responseText)
        let newmovieitem = `
        <div>
        <img src=${newresult.Poster}>
        </div><br>
        <div>
        <h2>MOVIE NAME: ${newresult.Title}
        </div>
        <div>
          <h2>RELEASE DATE: ${newresult.Released}</h2>
        </div>
        <div>
          <h2>GENRE : ${newresult.Genre}</h2>
        </div>
        <div>
          <h2>IMDB RATINGS : ${newresult.imdbRating}</h2>

        </div>`
        movieinfo.innerHTML = newmovieitem
    })

    newrequest.open('GET', newmoviedetails)
    newrequest.send()

}