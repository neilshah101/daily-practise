function palindrome(word) {



    for (let i = 0; i <= word.length - 1; i++) {
        if (word[i] == word[word.length - 1]) {
            return console.log("is palindrome");
        } else {
            return console.log("is  not palindrome");
        }
    }
}

console.log(palindrome("cat"))