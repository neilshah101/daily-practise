let citytextbox = document.getElementById("citytextbox");
let statetextbox = document.getElementById("statetextbox");
let btnsubmit = document.getElementById("btnsubmit");


btnsubmit.addEventListener("click", function() {
    const city = citytextbox.value
    const state = statetextbox.value

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=829ea0216deb875e615d6f69f6226188&units=imperial`)
        .then((response) => {
            return response.json()
        }).then((json) => {
            console.log(json)
            displayweather.innerHTML = `
            <div>
            <div id="cityname"> ${json.name}</div>
            <div id="box"> current temp: ${json.main.temp}° f</div>
            <div id="box">min-temp: ${json.main.temp_min}° f</div>
            <div id="box">max-temp: ${json.main.temp_max}° f</div>
            <div id="box">pressure: ${json.main.pressure}</div>
            </div>
            `
        })
})