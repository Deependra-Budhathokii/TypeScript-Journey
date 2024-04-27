"use strict";
// -------------
// STATIC PROPERTIES AND METHODS
// -------------
// Major Purpose: Through static, we can access class props without needing to create a instance of the class
// Example: Math operations Utility-  Creating a utility class to perform various mathematical operations
class MathOperation {
    static PI = Math.PI; //properties
    static add(num1, num2) {
        return num1 + num2;
    }
}
console.log(MathOperation.PI); // 3.14
console.log(MathOperation.add(2, 4)); // O/p: 6
