// task 1
// Given a positive integer. Bring the last digit of the number to the beginning. Print the new
// number. If the last digit of the inserted number is 0, number remains the same.
const number=1002;
let result="";
let lastDigit=number%10
if (lastDigit==0 || lastDigit==number){
    result=number;
} else{
    result=result+lastDigit+(number-lastDigit)/10;
}
console.log(result);


//task 2
//Given three numbers. Sort them by the ascending order.
let num1=23;
let num2=-456;
let num3=100;
if(num1>num2) {
    let sum =num1+num2;
    num1=sum-num1;
    num2=sum-num2;
}  if (num2>num3) {
    let sum=num2+num3;
    num2=sum-num2;
    num3=sum-num3;
}
console.log(num1,num2,num3);

// task 3
// Given the following code rewrite it using only two if operators. (Hint: use logical
// operators).

var n=21;
var i=0;
var j=0;
if(n%2===0 && (!Math.floor(n/10))){
    i=i+1;
}
if(n%3===0 && n%10===1){
    j=j+1;
}

console.log(i,j);

//task 4
// Write a program which will compute the area of a rectangular or a triangle after
// prompting the user to type the name of the figure name. Also check that entered
// numbers are positive.
// For the triangle entered numbers are height and and base.

var shape=prompt(shape);
var height=8;
var base=5;
var result="";
if(height===0 || base===0) {
    result="Please enter only positives"
} else if(shape==="triangle") {
    result=`Square of the triangle is ${height*base/2}`
} else if (shape==="rectangle") {
    result=`Square of the rectangle is ${height*base}`
}

console.log(result);


var shape=prompt(shape);
var height=+prompt(height);
var base=+prompt(base);
var result="";
if(height===0 || base===0 ) {
    result="Please enter only positives"
}
switch(shape) {
    case "triangle":
        result=`Square of the triangle is ${height*base/2}`;
        break;
    case "rectangle":
        result=`Square of the rectangle is ${height*base}`;
        break;
}
console.log(result);


//task 5
// Դավիթ ջան այս խնդրի վրա երկար եմ մտածել, գիտեմ որ ճիշտ  լուծումը չի, չի աշխատում հաստատ տարբեր դեպքերում ստուգել եմ, բայց սրանից ավել չեմ գտնում ուրիշ տարբերակ, լոգիկան հասկանում եմ ինչ պիտի անեմ, բայց չի ստացվում։
// Given an object. Invert it (keys become values and values become keys). If there is
// more than key for that given value create an array.
const obj={
    a:"1",
    b:"2",
    c:"2",
}
let object={};
let arr=[];
for(let key in obj) {
    let value=key
    for (let key in obj) {
        if (obj[key]===obj[value] && value==key) {
            arr.push(value);
            object[obj[key]]=arr;
        } else {
            object[obj[key]]=key;
        }
    }
}
console.log(object);