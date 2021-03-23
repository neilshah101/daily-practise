let storenametextbox = document.getElementById("storenametextbox");
let storeaddresstextbox = document.getElementById("storeaddresstextbox");
let storeitemtextbox = document.getElementById("storeitemtextbox");



btnsubmit.addEventListener("click", function() {
    addstores()
})


function addstores() {
    const store = storenametextbox.value;
    const address = storeaddresstextbox.value;
    displaystoreinfo.innerHTML = ""

    db.collection("storeinfo")
        .add({
            name: store,
            address: address,
            item: []
        }).then(function(docref) {
            getallstores()
        })
}


function getallstores() {

    db.collection("storeinfo")
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                // console.log(doc.id)
                let data = doc.data()
                let allstore = `
                <div id="storedetails">
                <br>
                <div id="displayfont">store name: ${data.name}</div>
                <div id="displayfont">store address: ${data.address}</div>
                <input type="text" placeholder="enter item" id="storeitemtextbox">
                <button onclick="addstoreitems('${doc.id}')">add item </button><br>
                <div>
                item : ${data.item}
                </div>
                <button onclick="deletstore('${doc.id}')">delete store</button>
                </div>
                `
                displaystoreinfo.insertAdjacentHTML('beforeend', allstore)
            })
        })
}

function deletstore(docid) {
    displaystoreinfo.innerHTML = ""
    db.collection("storeinfo")
        .doc(docid)
        .delete()
        .then(function() {
            getallstores()
        })
}

function addstoreitems(docid) {
    let storeitemtextbox = document.getElementById("storeitemtextbox");
    let addstoreitem = db.collection("storeinfo").doc(docid)
    addstoreitem.update({
        item: firebase.firestore.FieldValue.arrayUnion(storeitemtextbox.value)
    });
    getallstores()
}



getallstores()