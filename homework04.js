//task 1
//1. Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
const array = [1, 5, 9, 8, 7, 3];
function largestProduct(arr) {
    let result = arr[0] * arr[1];
    for (let i = 1; i < arr.length; i++) {
        currentProduct = arr[i] * arr[i + 1];
        if (currentProduct > result) {
            result = currentProduct;
        }
    } return result;

}
console.log(largestProduct(array));

//task 2
// 2. Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.
const array = [1, 4, 3, 8, 7];//[1,2,3,4,5,6,7,8]
function integerSequence(arr) {
    let sequenceArray = [];
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } if (arr[i] > max) {
            max = arr[i];
        }
    } for (let j = min; j <= max; j++) {
        sequenceArray.push(j);
    }
    return sequenceArray.length - arr.length;
}
console.log(integerSequence(array));


//task 3
// Implement built in array sort method using bubble sort algorithm.

let array = [1, 2, 15, 5, 8, 555, 99];
function mySort(arr) {
    for (let j = 0; j < arr.length; j++) {
        let isSwapped = false;
        let cropedIteration = arr.length - j;

        for (let i = 0; i < cropedIteration; i++) {
            console.log(i);
            if (String(arr[i + 1]) < String(arr[i])) {
                let next = arr[i + 1];
                arr[i + 1] = arr[i];

                arr[i] = next;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    } return arr;
}

console.log(mySort(array));
console.log(array.sort());

//task 3
// Implement built in array sort method using bubble sort algorithm.
let array = [1, 2, 15, 5, 8, 555, 99];

function myOwnSort(func) {
    for (let j = 0; j < this.length; j++) {
        let isSwapped = false;
        let cropedIteration = this.length - j;

        for (let i = 0; i < cropedIteration; i++) {
            const result = func(this[i], i, this)

            if (result) {
                let next = this[i + 1];
                this[i + 1] = this[i];

                this[i] = next;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    } return this;
}


//task 4
// Insert a n positive number. Print the n-st prime number.
let number = 10;
function nthPrimeNumber(n) {
    let i = 1;
    let value;
    while (n) {
        function isPrime(i) {
            for (let j = 1; j < i; j++) {
                if (i % j === 0 && j !== 1) {
                    return false;
                }
            } return true;
        } ++i;

        if (isPrime(i)) {
            value = i;
            n = n - 1;
        }
    } return value;
}
console.log(nthPrimeNumber(number));




                                            // Bubble sorting

//version 1
const array = [4, 3, 2, 1];
function bubbleSorting(arr) {

    for (let j = 0; j < arr.length; j++) {

        let isSwapped = false;
        let cropedIteration = arr.length - j
        for (let i = 0; i < cropedIteration; i++) {
            console.log(i);
            if (arr[i + 1] < arr[i]) {
                let next = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = next;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    } return arr;
}

console.log(bubbleSorting(array));

//version 2
const array = [4, 3, 2, 1];
function bubbleSorting(arr) {

    for (let j = 0; j < arr.length; j++) {

        let isSwapped = false;
        let i = 0;
        let croppedIteration = arr.length;

        while (i < croppedIteration) {
            if (arr[i + 1] < arr[i]) {
                let next = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = next;
                isSwapped = true;
                console.log(i);
            }
            i++;
        }
        croppedIteration = arr.length - j;
        if (!isSwapped) {
            break;
        }
    } return arr;
}
console.log(bubbleSorting(array));

//version 3
const array = [4, 3, 2, 1];
function bubbleSorting(arr) {
    let j = 0;
    while (j < arr.length) {
        let isSwapped = false;
        let i = 0;
        let croppedIteration = arr.length;
        while (i < croppedIteration) {
            if (arr[i + 1] < arr[i]) {
                let next = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = next;
                isSwapped = true;
                console.log(i);
            }
            i++;
        }
        croppedIteration = arr.length - j;
        if (!isSwapped) {
            break;
        } j++;
    } return arr;
}
console.log(bubbleSorting(array));




