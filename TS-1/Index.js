"use strict";
// Tuples in TypeScript : Matsering Data Structures
// Example usage
const person1 = ["Jade", 20, true];
const person2 = ["David", 22, false];
// const person2:PersonInfo = [22,"David", false]  // Tuple ensure order 
const displayPersonInfo = (person) => {
    const [name, age, hasDriverLicence] = person;
    console.log(`Name: ${name}, Age: ${age}, Driver's License Status: ${hasDriverLicence ? "yes" : "No"}`);
};
displayPersonInfo(person1);
displayPersonInfo(person2);
