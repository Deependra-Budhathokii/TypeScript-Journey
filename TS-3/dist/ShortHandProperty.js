"use strict";
// Shorthand Properties
// We can use Shorthand properties in class to eliminate lengthy code. For using Shorthand property, we use access modifiers
// With the Hlep of ACCESS MODIFIERS
// ----------------------------
// BEFORE SHORTHAND PROPERTY
// ----------------------------
class Personss {
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
// ----------------------------
// We can write above as
// ----------------------------
class Perso {
    name;
    age;
    hobbies;
    constructor(names, age, hobbies) {
        this.name = names;
        this.age = age;
        this.hobbies = hobbies;
    }
}
// ----------------------------
// As we mention the access modifier like public in above instance properties, if that modifiers in mentioned in constructor, its the same things, we can eleminate that in 
// Now finally we can write like below
// ----------------------------
// AFTER SHORTHAND PROPERTY
// ----------------------------
class Personsss {
    names;
    age;
    hobbies;
    constructor(names, age, hobbies) {
        this.names = names;
        this.age = age;
        this.hobbies = hobbies;
    }
    // Defining method/func inside the class
    introduce() {
        return `Hi I'm ${this.names} and I'm ${this.age} years old. I love ${this.hobbies.join(",")}`;
    }
}
const personRam = new Personsss("Ram", 20, ["Playing, Singing"]);
console.log(personRam.names);
console.log(personRam.introduce());
