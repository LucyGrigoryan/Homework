// task1
//1. Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting order is violated.
//const array=[2, 12, 15, 48, 64]
  const array=[-9, -4, -4, 3, 12, 4, 5]
function sortedAscending(arr){
  let result;
  for (let i=0;i<arr.length;i++){
    if(arr[i]<=arr[i+1]) {
      result=-1;
      }else{
      result=arr.indexOf(arr[i+1]);
      break;
    }

  }
  return result;
}
console.log(sortedAscending(array));

//task2
//2. Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each row and print them as an array
const array=[[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]];
function summary(arr){
  const newArr=[];
     for (let i=0;i<arr.length;i++) {
    let currentArr=arr[i];
    let result=currentArr.reduce((sum,current)=>sum+current,0);
        newArr.push(result);

  } return newArr;
}

console.log(summary(array));

//another solution
const array=[[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]];

function summary(arr){
  let result=arr.map(function(val){
    let sum=0;
    for (let i=0;i<val.length;i++){
      sum=sum+val[i];
    }
    return sum;
      });

  return result;
}

console.log(summary(array));



//task3
//3. Given an array of integers. Write a function that return new array from first array, where removed even numbers, and odd numbers was multiplied with new array length

const array=[5, 4, 78, 0, -3, 7];
const array=[2, 4, 6, 88]
const newArray=[];
function filteredOdds(arr){
  for (let i=0; i<arr.length;i++){
    if(arr[i]%2!==0){
      newArray.push(arr[i]);
    }
  }return newArray.map(item =>item*newArray.length);
}

console.log(filteredOdds(array));

//task 4
// 4. Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements starting from a to b spaced by step.
// 10 100     20   [10, 30, 50, 70, 90]
function stepByStep(a,b,step){
  const array=[a];
  for (let i=a; i+step<=b; i=i+step){
    array.push(i+step);
  }
  return array;
}

console.log(stepByStep(1,5,0.5));

//task 5
//5. Given an array of numbers. Print frequency of each unique number. (Frequency is the count of particular element divided by the count of all elements)

const array=[1,1,2,2,3];
function frequency(arr){

    let obj={};
    for (let i=0;i<arr.length;i++) {
        let freq=1;
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j] && i!==j ){
                freq=freq+1;
                obj[arr[i]]=`${freq/arr.length}`;
            }
            obj[arr[i]]=`${freq/arr.length}`;

        }

    } return obj;
}

console.log(frequency(array));




















