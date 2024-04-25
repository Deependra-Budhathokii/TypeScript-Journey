"use strict";
// function returnAndLog(value:number | string | boolean){
//     return value
// }
// const numResult = returnAndLog(10);
// const strResult = returnAndLog("Hello, Learning Genetics");
// const booleanResult = returnAndLog(true);
// console.log(numResult)
// console.log(strResult)
// console.log(booleanResult)
// Now using Generics , We can reduce the length of above functions
function returnAndLog(value) {
    return value;
}
const numResult = returnAndLog(10);
const strResult = returnAndLog("Hello, Learning Genetics");
const booleanResult = returnAndLog(true);
console.log(numResult);
console.log(strResult);
console.log(booleanResult);
// solving Function Overloading with TS Generics: Multiple Type Variables
function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
const result1 = add(5, "Deep");
const result2 = add("Hello", 5);
