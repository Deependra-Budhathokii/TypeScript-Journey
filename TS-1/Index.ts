

type Person = {
    name:string;
    age: number;
    isStudent: boolean;
    class?: string;  // optional parameter/properties
    address: {city:string; country: string}

}


const person: Person = {
    name: "Deepak",
    age: 22,
    isStudent:true,
    address: {
        city: "Kathmandu",
        country: "Nepal"
    }
}

console.log(person.isStudent)
console.log(person.address.country) // accessing nested objects



// Task:
//? Define an interface or type representing a product with properties for name, price, and quantity. Create a product object with the following data:
// Name: "Laptop"
// Price : 1000
// Quantity : 5

// ? Calculate Total Price: write a func called calculateTotalPrice that calculates and return total price of the product based on quantity



type Prod = {
    name: string;
    price: number;
    Quantity: number
}


const product: Prod = {
    name: "Laptop",
    price: 1000,
    Quantity: 5 
}


// const calculateTotalPrice = (price:number, quantity:number):number =>{
//    const totalPrice = price * quantity
//    return totalPrice
// }

// console.log(calculateTotalPrice(product.price, product.Quantity)) 


const calculateTotalPrice = (product:Prod):number =>{
   const totalPrice = product.price * product.Quantity
   return totalPrice
}

console.log(calculateTotalPrice(product)) 


//  We can see benefits like auto suggestion also here