arr = ["John", "Mary", "Alex", "Steve"]
checkword = "toom"

function truefalse() {
    for (let i = 0; i < arr.length; i++) {
        if (checkword == arr[i]) {
            return console.log("is present in the list")
        } else {
            return console.log("is  not present in the list")
        }
    }
}


console.log(truefalse())