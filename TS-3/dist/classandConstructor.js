"use strict";
// Oop: classes and Constructor
// `class` in terms of OOP is a blueprints for creating objects. 
//  `Class` is like a blurprints for creating similar things
// Lets suppose we are taking the survay of the University students. Consider `Person as a class` Person is boarder terms,it can be `Teacher`, `Principle`, `Student`
class Persons {
    name;
    age;
    hobbies;
    constructor(names, age, hobbies) {
        this.name = names;
        this.age = age;
        this.hobbies = hobbies;
    }
    // ways to Defining method/func inside the class
    introduce() {
        return `Hi I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(",")}`;
    }
}
// creating a instance of a Class
const person1 = new Persons("Hari", 22, ["Traveling", "reading"]);
const person2 = new Persons("Shyam", 12, ["painting", "playing"]);
console.log(person1.name);
console.log(person2.hobbies[1]);
console.log(person1.introduce()); // calling func.method of class
