//task 1
//1. Given an array. Write a recursive function that removes the first
//element and returns the given array. (without using
//arr.unshift(),assign second element to first, third element to second...)
const array = [6, 78, "n", 0, 1]; //[78, ‘n’, 0, 1]
function modifiedArray(arr, idx = 0) {
    if (idx === arr.length - 1 || arr.length === 0) {
        arr.length = idx;
    } else {
        arr[idx] = arr[idx + 1];
        modifiedArray(arr, idx + 1)
    }
    return arr;
}
console.log(modifiedArray(array));

//task 2
//2. Given an array of nested arrays. Write a recursive function that
//flattens it. (Hint create function that concats arrays).
//const array = [1555,[9,[5,6],2],[5,6],401]; //[1, 3, 4, 10];
const array = [14, [1, [[[3, []]], 1], 0]]
function flattenedArray(arr, idx = 0) {
    let flat = [];
    for (let elem of arr) {
        if (!Array.isArray(elem)) {
            flat.push(elem);
        } else if (Array.isArray(elem)) {
            flat = flat.concat(flattenedArray(elem, idx = 0));
        }
    }
    return flat;
}
console.log(flattenedArray(array));


//task 3
//Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number.Repeat that process if needed and return the result.
const number = 999999999999;
function sumOfDigits(num) {
    let result = (("" + num).split("")).reduce(function(acum, item) {
        return acum + (+item);
    }, 0)
    if (result !== (+("" + result).split(""))) {
        result = sumOfDigits(result);
    }
    return result;
}
console.log(sumOfDigits(number));

//task 4
//4. Given the list of the following readers:Output the books sorted by the percent in descending order which readStatus is true and add ‘%’ char in the end for percent value.
const readers = [
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm&quot", readStatus: true, percent: 20 },
    { book: "Solaris&quot", readStatus: false, percent: 90 },
    { book: "The Fall&quot", readStatus: true, percent: 50 },
    { book: "White Nights&quot", readStatus: false, percent: 60 },
    { book: "After Dark&quot", readStatus: true, percent: 70 }
];
function bestSellers(arr) {
    return arr.filter((val) => val.readStatus === true)
        .sort(function(a, b) {
            return b.percent - a.percent;
        })
        .map(function(val) {
            return {
                book: val.book,
                readStatus: val.readStatus,
                percent: val.percent + "%"
            }
        })
}


console.log(bestSellers(readers));









