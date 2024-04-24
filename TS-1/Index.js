"use strict";
const student1 = {
    name: "Hari",
    age: 22,
    greet: (country) => `HI my name is ${student1.name}, and i am ${student1.age} years old , I live in ${country}`
};
console.log(student1.greet("Nepal"));
const introduction = (student1) => {
    const { name, age } = student1;
    return `HI my name is ${name}, and i am ${age} years old `;
};
console.log(introduction(student1));
