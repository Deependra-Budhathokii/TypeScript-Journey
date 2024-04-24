type Student = {
    name:string;
    age: number;
    gender?:string
    greet: (country:string) => string;   //method call signature where func strcuture and type annotation is defined , not the actual working of function
    
    // Alterntaive
// (country:string): string    
}


const student1:Student = {
    name: "Hari",
    age:22 ,
    greet: (country)=>`HI my name is ${student1.name}, and i am ${student1.age} years old , I live in ${country}`

}

const student2:Student = {
    name: "Ramesh",
    age:21 ,
    greet: (country)=>`HI my name is ${student1.name}, and i am ${student1.age} years old , I live in ${country}`
}

console.log(student1.greet("Nepal"))
console.log(student2.greet("India"))




// const introduction = (student1:Student):string =>{
//     const{name,age} = student1;
//     return `HI my name is ${name}, and i am ${age} years old `
// } 

// console.log(introduction(student1))