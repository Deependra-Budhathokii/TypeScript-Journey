"use strict";
const emp_1 = {
    name: "Bob",
    age: 18,
    emp_id: 8234,
    department: "IT"
};
// If we need employee both company and personal details, we can use this
const empInfo = (emp) => {
    const { name, age, emp_id, department } = emp;
    console.log(`Name of emp : ${name} and He is ${age} years old and Employee id : ${emp_id} and He works in ${department}`);
};
empInfo(emp_1);
// If we need Employee onlY Personal Info, we can use this
const empPersonalInfo = (emp) => {
    const { name, age } = emp;
    console.log(`Name of emp : ${name} and He is ${age} years old`);
};
empPersonalInfo(emp_1);
const user = {
    name: "Ram",
    age: 25,
    Loan_status: true
};
const userLocation = {
    country: 'Nepal',
    city: 'Kathmandu',
    postal_id: 44788
};
const createUserProfile = (userinfo, userloca) => {
    return { ...userinfo, ...userloca };
};
// createUserProfile(user,userLocation);   // func call
const completeUserInfo = createUserProfile(user, userLocation);
console.log(completeUserInfo);
