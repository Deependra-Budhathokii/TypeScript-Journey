const numbers: number[] = [2,3,4,5,6,7,8]

// Doubling each numbers
const doubleData: number[] = numbers.map((curVal:number)=>curVal*2)
console.log(doubleData)

// Converting  to string

const numberToString:string[] = numbers.map((curVal:number)=>curVal.toString()) 
console.log(numberToString)

//Filtering the Even numbers
const filterEvenNum:number[] = numbers.filter((curElem:number)=>curElem%2===0)
const filterOutEvenNum:number[] = numbers.filter((curElem:number)=>curElem%2!==0)
console.log(filterEvenNum)
console.log(filterOutEvenNum)