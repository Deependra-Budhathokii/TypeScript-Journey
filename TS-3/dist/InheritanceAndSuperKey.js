"use strict";
// Oop: classes and Constructor
// `class` in terms of OOP is a blueprints for creating objects. 
//  `Class` is like a blurprints for creating similar things
// Lets suppose we are taking the survay of the University Teachers. Consider `Person as a class` Person is boarder terms,it can be `Teacher`, `Principle`, `Student`
class Person {
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
const persons1 = new Person("Hari", 22, ["Traveling", "reading"]);
const persons2 = new Person("Shyam", 12, ["painting", "playing"]);
// console.log(persons1.name)
// console.log(persons2.hobbies[1])
console.log(persons1.introduce()); // calling func.method of class
//  Lets suppose your Higher authority ask you why you make person class although i had tell you to collect teachers data. Then you could replies smartly like : Respected sir, What if you tells me tommorrow to collect the Student Data or Principle Data, We can simply inherits the proprty of Class person 
// Lets Create a Student class that Inherits above Person class Charactertics
//  We use `extends` keyword for inheritance
class Student extends Person {
    grade;
    constructor(names, age, hobbies, grade) {
        super(names, age, hobbies); //super keyword
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()}. I am in grade ${this.grade}`;
    }
}
const students1 = new Student("Ramesh", 13, ["Watching Cartoon", "Dancing"], 10);
console.log(students1.name);
console.log(students1.introduce());
