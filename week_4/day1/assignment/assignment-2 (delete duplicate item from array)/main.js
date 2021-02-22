// names = ["John", "Mary", "Alex", "Steve", "Mary", "John"]


// function removeduplicates(names) {
//     for (let i of names) {

//         if (names[i] == names[i]) {
//             names.pop(i)
//             return names;
//         }

//     }
// }
// console.log(removeduplicates(names))



arr = ["John", "Mary", "Alex", "Steve", "Mary", "John"]

function getUnique(arr) {

    let uniqueArr = [];

    for (let i of arr) {
        if (uniqueArr.indexOf(i) == -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}


console.log(getUnique(arr))