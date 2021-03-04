let storenametextbox = document.getElementById("storenametextbox");
let storeaddresstextbox = document.getElementById("storeaddresstextbox");



btnsubmit.addEventListener("click", function() {
    const store = storenametextbox.value;
    const address = storeaddresstextbox.value;

    db.collection("storeinfo")
        .add({
            name: store,
            address: address
        }).then(function(docref) {
            getallstores()
        })
})


function getallstores() {



    db.collection("storeinfo")
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                let data = doc.data()
                let allstore = `
                <div id="storedetails">
                <br>
                <div id="displayfont">store name: ${data.name}</div>
                <div id="displayfont">store address: ${data.address}</div>
                <button>add item </button><br>
                </div>
                `
                displaystoreinfo.insertAdjacentHTML('beforeend', allstore)
            })
        })
}

getallstores()