"use strict";
// Class is a blueprints for creating objects
// So abstract class like the blue prints of multiple classes
// - `Abstract classes cannot be instantiated`
//  we do not do anything we abstract class, we just get data from it for derived classes. That why abstract class are not instantiated
//? Example `Shape Hierarchy`.
//? *Suppose you are building a graphics application, and you want to create a hierarchy of different shapes. You can use an abstract base class shape to define a common properties and methods that all shape shares*
// We have shapes like circle, rectangle, square etc. Lets say we require `calculate area` and `display area` for all these shape which is a COMMON NEED which we mention in abstract class
// Abstract class  Shape
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
// Lets create a class Circle   that inherits abstract class
class Circle extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color); // in place of this.color from above super class
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea = () => {
        console.log(`The color of the Circle is ${this.color} and the radius is ${this.radius}`);
    };
}
// Instantiating the class i.e means creating object
const circle = new Circle("red", 4);
console.log(circle.calculateArea());
circle.displayArea();
