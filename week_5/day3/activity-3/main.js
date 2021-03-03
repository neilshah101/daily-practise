fetch("https://troubled-peaceful-hell.glitch.me/orders", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: 'neil@123.com',
        type: 'mocha',
        size: 'large',
        price: '10'
    })
}).then(response => {
    return response.json()
}).then(result => {
    console.log(result)
})