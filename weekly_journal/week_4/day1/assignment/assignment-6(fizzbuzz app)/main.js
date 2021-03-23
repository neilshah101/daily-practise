function fizzbuzz(num) {

    if (num % 5 == 0 && num % 3 == 0) {
        return console.log("is fizbuzz")
    } else if (num % 5 == 0) {
        return console.log("is buzz")
    } else if (num % 3 == 0) {
        return console.log("is fizz")
    }

}
console.log(fizzbuzz(8))