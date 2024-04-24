"use strict";
const numbers = [2, 3, 4, 5, 6, 7, 8];
// Doubling each numbers
const doubleData = numbers.map((curVal) => curVal * 2);
console.log(doubleData);
// Converting  to string
const numberToString = numbers.map((curVal) => curVal.toString());
console.log(numberToString);
//Filtering the Even numbers
const filterEvenNum = numbers.filter((curElem) => curElem % 2 === 0);
const filterOutEvenNum = numbers.filter((curElem) => curElem % 2 !== 0);
console.log(filterEvenNum);
console.log(filterOutEvenNum);
