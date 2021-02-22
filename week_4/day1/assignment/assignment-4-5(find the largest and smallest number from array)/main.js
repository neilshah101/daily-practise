array = [39, 43, 92, 8, 10, 1, 100, 102];
largest = -10000000000000000000000000000000000000000000000000000000000000000000000000000;
smallest = 10000000000000000000000000000000000000000000000000000000000000000000000000000;


for (i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}
console.log(largest);


for (i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
        smallest = array[i];
    }
}
console.log(smallest);