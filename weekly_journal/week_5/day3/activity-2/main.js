let coffeeorder = document.getElementById("coffeeorder")

fetch("https://troubled-peaceful-hell.glitch.me/orders")
    .then((response) => {
        return response.json()
    }).then((json) => {
        console.log(json)
        let result = json.map((post) => {
            return `
            <div>
            email: ${post.email}
            <div>
            <div>
            type: ${post.type}
            <div>
            <div>
            size: ${post.size}
            <div>
            <div>
            price: ${post.price}
            <div><br>

            `
        })
        coffeeorder.innerHTML = result.join("")

    })