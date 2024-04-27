// -------------
// STATIC PROPERTIES AND METHODS
// -------------


// Major Purpose: Through static, we can access class props without needing to create a instance of the class


// Example: Math operations Utility-  Creating a utility class to perform various mathematical operations

class MathOperation {
    public static PI:number = Math.PI //properties
    public static add(num1:number,num2:number){
        return num1+num2
    }
}

console.log(MathOperation.PI)  // 3.14
console.log(MathOperation.add(2,4))   // O/p: 6

