"use strict";
const person = {
    name: "Deepak",
    age: 22,
    isStudent: true,
    address: {
        city: "Kathmandu",
        country: "Nepal"
    }
};
console.log(person.isStudent);
console.log(person.address.country); // accessing nested objects
const product = {
    name: "Laptop",
    price: 1000,
    Quantity: 5
};
// const calculateTotalPrice = (price:number, quantity:number):number =>{
//    const totalPrice = price * quantity
//    return totalPrice
// }
// console.log(calculateTotalPrice(product.price, product.Quantity)) 
const calculateTotalPrice = () => {
    const totalPrice = product.price * product.Quantity;
    return totalPrice;
};
console.log(calculateTotalPrice());
