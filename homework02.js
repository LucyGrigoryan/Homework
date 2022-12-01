//task 1
//Given two objects. Write a function that performs shallow compare.

function shallowCompare(a,b){
  let arr=[];
   let arr1=[];
  let result=false;
    for (let key in a) {
    arr.push(key)
  } 
  for (let key in b){
    arr1.push(key)
  }
  if (arr.length===0){
    result=true;
  }
  if(arr.length===arr1.length ){
    for (let i=0;i<arr.length;i++){
      for (let j=0;j<arr1.length;j++){
        if(a[arr[i]]===b[arr1[j]] && arr[i]===arr1[j] ){
          result=true
        }
      }
    }
  }
    
  return result; 
}
console.log(shallowCompare({a:"4",b:"5"},{a:"4"}));

//task2
//Determine if a word or phrase is an isogram. An isogram (also known as a non pattern word,is a word or phrase without a repeating letter.

function isIsogram (word) {
  let result=true;
  for (let i=0;i<word.length;i++){

    let char=word[i];
    for (let j=i+1;j<word.length;j++){
      if(word[j]!==char){
        continue;
      } else {
        result=false;
      }

    }
  }  return result;
}
console.log(isIsogram("unaynutyun"));

//task 3
//Given a number n ( n>= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)

function fibonacci(number){
  let x1=0;
  let x2=1;
  let fibo;
  for (let i=2;i<=number;i++){
    fibo=x1+x2;
    x1=x2;
    x2=fibo;
  }
  return fibo;
}

console.log(fibonacci(8));

//task 4
//Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum, print the quotient, otherwise print the remainder.123

function actionWithNumber(number){
  let sum=0;
    let product=1;
  let result="";
  if(number===0) {
    result="Cannot calculate"
  }
  while(number!==0) {
    let digit=number%10;
    number=(number-digit)/10;
    sum=sum+digit;
    product=product*digit;
    if(product%sum===0){
    result=`Quotient is ${product/sum}`;
  } else {
    result=`Remainder is ${product%sum}`
    }
  }

  return result;
}

console.log(actionWithNumber(1233));

//task5
//Write a program to print X star pattern series.
//Աստղս տձև է ստացվել, չկարողացա սիրունացնել)))
function printMatrix (x) {
    let result = ''
    for(let i = 0; i <= x; i++) {
        let row = ''
         for (let j = 0; j <= x; j++) {
           if(j===i || j===x-i && j!==i+1 && i!==j+1) {
            row += '*';
          } else {
            row=row+" ";
           }
         }
        result += row+"\n"
    }
    console.log(result)
}

printMatrix(7);






