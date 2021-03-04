let movienametextbox = document.getElementById("movienametextbox")
let directornametextbox = document.getElementById("directornametextbox")
let yeartextbox = document.getElementById("yeartextbox")
let btnsubmit = document.getElementById("btnsubmit")

btnsubmit.addEventListener("click", function() {
    const movie = movienametextbox.value;
    const director = directornametextbox.value;
    const year = yeartextbox.value;

    db.collection("movieinfo")
        .add({
            moviename: movie,
            director: director,
            year: year
        }).then(function(docref) {
            getAllMovie()

        })
})

function getAllMovie() {


    dispalymovieinfo.innerHTML = ""

    db.collection("movieinfo")
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                let data = doc.data()
                let movieItem = `
                <br>
                <div>movie name: ${data.moviename}</div>
                <div>director name: ${data.director}</div>
                <div>year: ${data.year}</div><br><br>
                `
                dispalymovieinfo.insertAdjacentHTML('beforeend', movieItem)
            })
        })
}

getAllMovie()