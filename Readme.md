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


## Learn Typecript Generics



