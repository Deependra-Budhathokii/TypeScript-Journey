
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
function returnAndLog<T>(value:T):T{
    return value
}


const numResult =  <number>returnAndLog(10);
const strResult = <string>returnAndLog("Hello, Learning Genetics");
const booleanResult = <boolean>returnAndLog(true);

console.log(numResult)
console.log(strResult)
console.log(booleanResult)



// solving Function Overloading with TS Generics: Multiple Type Variables

function add<T,U>(a:T,b:U) {
    console.log(typeof a)
    console.log(typeof b)
}

const result1 = add<number,string>(5,"Deep");
const result2 = add("Hello", 5) // passing multiple type in same func
const result3 = add(true, 5)  // passing multiple type in same fucn



// In case , If you are sure that particular paramter is of certain type, you can mention it directly like we mention boolean below
function Sub<T>(a:T,b:boolean) {
    console.log(typeof a)
    console.log(typeof b)
}

const result4 = Sub<string>("Hello", true) 