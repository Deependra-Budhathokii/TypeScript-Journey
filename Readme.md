# TypeScript(ts)
Typescript is a `superset of javascript` that adds static typing and other features to enhance js development.

Js + more features = Typescript

### Extra Features:

- Interfaces
- Tuples
- Enums
- Generic
- Classes etc   

`any valid js Code is also valid TypeScript code`

`Advanatages`
- Easier to Write
- Easier to Read
- Easier to Maintain


### Typescript Catches the error at `Complile Time` instead of `runtime`, which makes debugging easier and reduces the likelihood of bugs in production.

Note : *`Browser` does not supports `typescript` , so the code written in typescript should be converted/compiles in javascript, so that browse can undertsnd and executes it*
Thus,
`Disadvantages` : we need `TypeScript Compiler`


#### Installation:
- NodeJs installation needed

we are globally installing ts :  `npm install -g typescript`t

To check if typescript is installed, In cmd 
type : >> tsc --v

tsc means checking typescript compiler



`.ts vs .tsx`
- .tsx extension is used for Typesscript files that inlcudes `JSX syntax` and `.ts extension` is for regular typescript files with JSX

# Running
```
node index.ts  // run ts file with vanilla js but if type is mentioned, t shows error
tsc index.ts   // compile ts to vanilla js

then only run
node index.js  //  autogeneated vanilla js file by tsc 

```





We can get instant feedback in ts as typescript behaves like an `compiled language` where javascript is the `compilation target`.

->You can run the tsc comipiler using the tsc command
```
>> tsc index.ts
```

### The Primary goal of the typescript is to enable `Static Typing`, one way to achieve that is by allowing you to `annotate` your code with `types`.

```
let appname: string;
```
We can `strongly type` a variable using a `colon` by its type like a string, boolean or number. This is knowns as `explicit type`, if we try to assign a value with a wrong type, we get an `error`. 

Alternatively if we set a initial value, it will `implicitly infer the type` however there may be cases you want to opt out of this behaviour, in which case you can `annotate` with any type that allows you to `loosely type` or opt out of type checking

```
let appname: any = 'fireship';    // loosely type/opt out of type checking
```

When working with array, using brackets to strogly typo list
```
let list: number[] = [1,2,3];
```

In addition, you can define your own custom type and interfaces, which is especially powerful when working with objects
```
interface Car{
    year: number;
    model: string;
    electric: boolean;
}

we can apply interface in plain js

let myCar: Car;

```

`The beauty` of having `strongly type` code is that, we get `autocomplete` everywhere in our IDE i.e `Intellisense Everywhere`

<hr>
<br>


# Basis
```
ts File

// @ts-ignore
function sum(a: number,b: number):number{
    return a+b
}
 console.log(sum(10,10))

```


#### TS configuration File
we can modify our compiler with this file, for e.g our tsc compiles our ts file to js file, even if there is an type error. To tell compiler, do not compile ts file on any type of error, we use config file. e.g

```
tsc init     // initialized ts config file
tsc --init     // initialized ts config file

tsc --noEmitOnError index.ts 
```


### Type Annotations
![Types in Typescript](/Images/types-in-typescript.png)
<br>


### BooLean and BIGINT TYPE
Boolean has value either true or false. It is a one of the primitive data type(i.e has no properties and methods)

let isMyNameDeep:boolean = true;
let hasStarted:boolean = false;

```
// Prog: `true if a num is divisible by both 4 and 8`

const isEven = (a:number):boolean=>{
   return a%8 === 0
}
 console.log(isEven(8));
```

### BigInt Type  : 
*skipping for now as this is used for dealing with very huge number*


### Any vs Unknown Types
`Any type` is the most flexible type in TypeScript.  Its like turning off all type checking for the vairables or expressions it is applied to

```
let myfavColor:any = "Blue"
myfavColor = 2

console.log(myfavColor)

// no errors at all, but in ts, if not mentioned `any` in such case, shows error
```

<span style="color:green; font-size:1.2rem; font-weight:bold">usecases</span>
 - *Working with Dynamic data*
 - *migration from javascript: when migrating an existing js codebase to typescript*

### unknown Type
The `unknown` type is a safer alternative to `any` becoz it still  enforces `type checking` and `type safety`.

```
let num = 10;
num = true  // here ts performs typeChecking

num.map()   // here ts performs/enforces type safety like whenther we can apply methods or properties like map,reduce, fileter, foreach etc in this num or not, This is called type safety 

As we know, we use map on array not on number, thus type safety detect such a error

```

```
asyn function fetchData(): Promise<unknown>{
    const response = await fetch("https://api.example.com/data")
    const data = await response.json();
    return data;
}

async function processData() {
    const response = await fetchData();

    if (typeof repsonse === 'object'){

        // perform operations on the response object
    }
}
```


### <span style="color:#F5806D;">Typescript function</span>: Understanding Invocation, Declaration, and Return type 

### <span style = "color:#F5806D;">Function Invocation</span>
Funciton invocation simply means function calling

 
### <span style="color:#F5806D;">Type Inference in TS</span>
Type Inference in TS refers to ability of the typescript compiler to automatically determine and assign types to variables, expressions, and functions return values based on their usage and context in the code.

`inference` means `to infer` i.e means `to assume`, thus, it implicilty refer `type`  which is somehow oppsite to `type annotations` where we explcitly provides types

- use type inference for simple cases 
- when in doubt, provide explicit type annotations to make intensions clear.
- Avoid relying heavily on type inference

```
const myName = 'Deependra';
```


### <span style="color:#F5806D;">Optional and Default Parameter in TS</span>
- Typescript allows you to define optional and default parameters in function. 
- optional parameters are denoted by appending `? symbol` after the parameter name
- and default parameters are specified by providing a default value in the paramter declaration.


```
const invite = (name:string, id?:number):string =>{

    if (id){
    return `Welcome ${name} and your id is ${id}`
    } else {
        return `Wecome ${name}`
    }
}

const emp = invite("Ryan")
console.log(emp)

//Here, if we provide single arg, it didn't shows err as we mentioned id as optional using `? symbol`
```
<span style="color:green;">Highlights: ? symbol </span>
- id?:number

<br>


## <span style="color:#F5806D;">Array In TypeScript</span>
In typescript, you can create and initailize arrays using various approaches

*Using Square Brackets:*
- const num: number[] = [1,2,3,4,5,6]

*Using Array constructor:*
- const numm: number[] = new Array(1,2,3,4,5,6)

*Using the Array .of method:*
- const names: string[] = Array.of("Deependra", "Budhathoki", "CSIT")


### Array Operations and Iterations
*Array in Typescript come with built-in methods that allow you to perform common operations*

`Iterating over elements`
```
const fruits: string[] = ["apple", "banana", "orange", "mango"];
fruits.forEach((curVal:string)=>console.log(curVal))
```

### <span style="color:#F5806D;">Map, reduce and Filter method in Array in TS</span>
```
const numbers: number[] = [2,3,4,5,6,7,8]

// Doubling each numbers

const doubleData: number[] = numbers.map((curVal:number)=>curVal*2)
console.log(doubleData)

// Converting  to string

const numberToString:string[] = numbers.map((curVal:number)=>curVal.toString()) 
console.log(numberToString)

//Filtering the Even numbers and Filter out

const filterEvenNum:number[] = numbers.filter((curElem:number)=>curElem%2===0)
const filterOutEvenNum:number[] = numbers.filter((curElem:number)=>curElem%2!==0)
console.log(filterEvenNum)
console.log(filterOutEvenNum)
```

## <span style="color:#F5806D;">Objacts in TypeScript</span>

To define type:  write colon and curly braces after the object name and define type like a schema.   
*Note: use  semicolon(;) in defining type instead of comma in like in obj* 

```
const person:{
    name:string;
    age: number;
    isStudent: boolean;
    address: {city:string; Country: string}
} = {
    name: "Deepak",
    age: 22,
    isStudent:true,
    address: {
        city: "Kathmandu",
        Country: "Nepal"
    }
}

console.log(person.name)
console.log(person.isStudent)
console.log(person.address.city) // accessing nested objects
```
<span style="color:pink;">Note: But in above code, when we create multiple object and define type schema for each, our source code will be long for this, lets see `type ALias in ts`</span>

## <span style="color:yellow;">Type Alias in TS(Typescript)</span>
In Typescript, a type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. Type aliases provides better `readability`, `organizations`, and `abstraction` of complex types.

*To define a type alias, you use the type keyword followed by the alias name and the type definition*

syntax :  `similar to object creating`
  type Person = {
    
}

Note : 
- alias name i.e here `Person`, first letter must be`capital`

```
const Person = {
    name : string;
    age: number;
    isStudent: boolean;
    address: {city:string; country:string}
}

const person:Person = {
    name : "Deepak",
    age : 22,
    isStudent: true,
    address : {city: "Kathmandu", country: "Nepal"}
}

```


## <span style="color:yellow;">Introduction to Call Signatures</span>
The `function call signature` refers to the declaration or definition of a function, which includes the function's name, parameters, and return type. It defines the structure and type information of a function without including the function's implementation or body 

<span style="color:red; font-size:1.2rem"> `Note:` very imp: call signatures are typically used `inside object type notations` to describe the shape of functions within object types.

`*Void*`    
In TypeScript, Void is a data type that represents the `absence of any value`. It is often used as the return type of functions that do not return a value.

This is similar to using undefined as a return type in JavaScript, but void is more explicit in indicating that the function intentionally does not return anything.

```
type Student = {
    name:string;
    age: number;
    gender?:string;
    greet: (country:string) => string   //method call signature where func strcuture and type annotation is defined , not the actual working of function 


    const student2:Student = {
    name: "Ramesh",
    age:21 ,
    greet: (country:string)=>`HI my name is ${student1.name}, and i am ${student1.age} years old , I live in ${country}`
}

console.log(student1.greet("Nepal"))
}
```


## <span style="color:yellow;">Enums in TypeScript</span>
ENums in TS are commonly used when you want to represent 
- if one properties has a `multiple value`, then we use `Enums`
- in TS, when constants are not explicitly assigned numeric valuas, Then they are assigned incremental numeric valuas starting from 0. The default numeric values for the first enum constant is 0, and subsequent enum contants receive values incremented by 1

user1 = login => normal user
user2 = login => admin user


```
enum Roles {
    user = "user", 
    admin = "admin"
}


type LoginDetails = {
    name? : string;
    email : string;
    password : string;
    role : Roles

}


const user1: LoginDetails = {
    name: "Ryan Shrestha",
    email: "rayan@gmail.com",
    password: "dhas",
    role: Roles.admin

}

const user2: LoginDetails = {
    email : "hari@gmail.com",
    password: "ajds",
    role: Roles.admin

}
```

## <span style="color:yellow;">Tuples in TypeScript: Matering Data Structures</span>
*Lets know, it is better than array or not*

In Typescript, tuples are  a data structure that allows you to store a fixed-size collection of element of different types. They are similar to arrays, but with a key difference: the types of elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type and their size can vary.

`*used where , Number of Elements are Fixed already*`
```


// Defining a tuple for person information(with name, age and driving licence )
type PersonInfo = readonly [string, number, boolean, boolean?]


// Example usage
const person1:PersonInfo = ["Jade", 20, true] 
const person2:PersonInfo = ["David", 22, false]
// const person2:PersonInfo = [22,"David", false]  // Tuple ensure order 


const displayPersonInfo = (person:PersonInfo) =>{
    const[name, age, hasDriverLicence] = person

    console.log(`Name: ${name}, Age: ${age}, Driver's License Status: ${hasDriverLicence ? "yes" : "No"}`)
}


displayPersonInfo(person1)
displayPersonInfo(person2)
```
## <span style="color:yellow;">Unions and Intersection in Typescript</span>
*union and intersection is just like how we study in school*
*You can use |(pipe) symbol to define a union type*
*You can use &(ampersand) symbol to define a intersection type*

### Union
An user can provides any type of inputs like string, number, boolean, lets say in a contact form

```
const inputValue = (value: string|number|boolean ) =>{

}

<!-- func calling -->
inputValue(55)
inputValue("hello")
inputValue(true)
```


### Intersection
allows you to combine multiple types into a single type
- Note: in Ts intersection logic works in a way that both the set A and Set B data should be there 


```
type Person = {
    name: string,
    age: number
}

type Employee = {
    emp_id: number,
    department: string
}


//type EmployeeDetails = Person | Employee   // union
type EmployeeDetails = Person & Employee   // Intersection


....rest of the code

```


## <span style="color:yellow;">Learn Typescript Generics</span>
*Note : It is imp as its main concepts is `reusable components` like in react.*

Generics in Typescript allow you to create reusable components or give power  to functions `that can work with multiple data types.`

-  `Give power  to functions that can work with multiple data types.`
- use of anckle i.e <> brackets, which is a syntax of generics
- inside generic syntax, we pass `data type placeholder`
- can be written either `<T> or <Type>` or any

```
function returnAndLog<T>(value:T):T{
    return value
}
const numResult =  <number>returnAndLog(10);
const strResult = <string>returnAndLog("Hello, Learning Genetics");
```
<br>

## <span style="color:#2EEA91;">VS code INLAY HINTS</span>
In vs code,
-  ctrl , to open vs code setting 
- search : typescript inlay hints
- then apply tick on wherever you need
- more details, search in google : vscode Typescript inlay hints 
- then copy paste setting

You can also use this for js 


## <span style="color:yellow;">Matering Multiple Variable Type</span>

```
// solving Function Overloading with TS Generics: Multiple Type Variables

function add<T,U>(a:T,b:U) {
    console.log(typeof a)
    console.log(typeof b)
}

const result1 = add<number,string>(5,"Deep");
const result2 = add("Hello", 5)
```

## <span style="color:yellow;">Interfaces in Typescript</span>
In Typescript, an interface is a powerful feature that allows you to define a contract for an object shape.
- it specifies the properties and their types than an object must have to be considered of that particular interface type.
- Interfaces are primarily used for type checking during development and do not generate any js code at runtime

In `js` , there is a only `object` but in `TS` there is `object types`


<span style="color:red;  font-size:1.3rem">Note</span> : `Type alias and Interface are same,In fact, they are alternative of each other`

- Interfaces are mostly used in Classes and Object
- type alias is mostly used in functional components
- todays we, mostly see `interface`
- In between them, there is `=` syntax diff, In Interface,there is `no =` and in `type alias` has `=`




```

// Creating greet objects using Interface

interface Greet  {
        name: string;
        age: number
}

const greet:Greet = {
    name: "Bob",
    age: 10
}

console.log(greet.age)
```


## <span style="color:yellow;">Typescript Compiler and Project Configuration</span>

- To automate our compiler and run of js file seperattively, we need to configure

- We have `Watch Mode Property`

In terminal, we have cmd
```
tsc index.ts  --watch

// But it has a problem, it will update only one ts file, and not work for multiple file
```

- To work on a multiple file, we need to config `tsconfig.json`

```
tsc --init
tsc -w    

//  w refers watch, if use ful watch then double hyphen  tsc --watch
```

- suppose in your root folder you want your `ts files` on dir src and its respective `js file` on dir `dist` . For this, we see properties `ROOTDIR and OUTDIR` 
 
  - In config file, search `rootDir` 
     -  modify to   "rootDir": "./src",  

  - In config file, search `outDir` 
     -  modify to   "outDir": "./dist", 



- `If you  to config js version to latest`
  -  We have by default :` "target": "es2016",`
    -we can modify to `"target": "ES2022",`


- We can specifiy library i.e  `"lib": []`, like DOM, react etc
  - `"lib": ["ES2022", "DOM"]`


- Suppose if we use node packages, and we not want the `node modules` , Here we can exclude that: For this
    - In config file, At the end , we can create `"exclude":[node]` 
    - Or you can include also like `"exclude":[]` 
    
- Also imp is to `uncomment` the noEmitOnError
   -     "noEmitOnError": true,   

<br>
<hr>



# <span style="color:#32F7A6;">Object Oriented Programming (OOP)</span>

## <span style="color:yellow; font-weight:400;">Class and Constructor</span>

A `class` in terms of OOP is a blueprints for creating objects.  
A   `Class` is like a blurprints for creating similar things

- In TypeScript, there is a convention to use   `PascalCase`(also known as UpperCamelCase) for `class names.`  



Lets suppose we are taking the survay of the University students. Consider `Person as a class` Person is boarder terms,it can be `Teacher`, `Principle`, `Student` 

-> while defining  class, type alias, Interface looks similar but class has many usecases

```
class Persons {
    name: string;     // these are instance properties
    age: number;
    hobbies: string[];

    constructor(names:string, age:number, hobbies:string[]){
        this.name = names;
        this.age = age;
        this.hobbies = hobbies
    }
}
```
*string []  -> array of string*


`Instance of a Class` and `Constructor`
- *Now with the help of classes we can create multiple instances.*
- *When you `create` a `instance of a class`, it `automatically calls a constructor`.*
- The `this` keyword in a constructor inside a class refers to the instacne od the object being created. it's used to access and assign values to the instance properties

```
const person1: Persons = new Persons("Hari", 20, ["reading", "paintings"])
const person2: Persons = new Persons("Shyam", 30, ["Travelling", "Reading"])

console.log(person2)
```

## <span style="color:yellow; font-weight:400;">Inheritance and Super Key</span>

-> `Inheritance` is a mechanism in which one class acquires the property of another class. For example, a child inherits the traits of his/her parents


-> Lets Create a Student class that Inherits above Person class Charactertics.  
-> We use `extends` keyword for inheritance
```
class Student extends Persons {

 }
 


 const students1 = new Student("Ramesh", 13, ["Watching Cartoon", "Dancing"])
 console.log(students1.name)   // o/p:  Ramesh
```

In above code, we are able to access person instance properties and output it due to inheritance.

- But while adding a new instance properties in the new class Students, There is a rule that all the `constructor func parameters of Parent class` should be mentioned in `new class constructor func` .
- Not only that we will use  super() keyword to avoid using the this.name, this.age, again of parent class in a new class
- In TypeScript, the `super keyword` is used in the context of class inheritance. It allows a `subclass`(also known as a `derived class`) to call methods or access properties of its `superclass`(also known as `base class`)
- This is particularly useful when you want to extend the behaviour of a parent class while still leveraging its existings functionality
- super keyword position should also be on top than other properties like this.grade
 lets see:

```

class Student extends Persons {
    grade: number;

    constructor(names:string, age:number, hobbies:string[], grade:number){
        super(name,age,hobbies);  
        this.grade = grade
    }


    introduce(){

        return `Hi I'm ${this.name} and I'm ${this.age} years old. I am in grade ${this.grade}. I love ${this.hobbies.join(",")}`
    }

 }
 

 
 const students1 = new Student("Ramesh", 13, ["Watching Cartoon", "Dancing"],  10)
 console.log(students1.name)   // o/p:  Ramesh

```
