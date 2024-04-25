
type Person = {
    name: string,
    age: number
}

type Employee = {
    emp_id: number,
    department: string
}


//type EmployeeDetails = Person | Employee   // union
type EmployeeDetails = Person & Employee   // Intersection


const emp_1:EmployeeDetails = {
    name: "Bob",
    age : 18,
    emp_id : 8234,
    department: "IT"
}


// If we need employee both company and personal details, we can use this
const empInfo = (emp:EmployeeDetails): void =>{
    const{name,age,emp_id, department} = emp
      console.log(`Name of emp : ${name} and He is ${age} years old and Employee id : ${emp_id} and He works in ${department}`)
}

empInfo(emp_1)


// If we need Employee onlY Personal Info, we can use this
const empPersonalInfo = (emp:Person): void =>{
    const{name,age} = emp
      console.log(`Name of emp : ${name} and He is ${age} years old`)
}

empPersonalInfo(emp_1)


// Practise : Create User Profile
// You are given 2 typescript values: user and MyLocation. The user type represents basic user information, while the mylocation contains details about the user location. Create a function called createUserProfile that takes a USer object and MyLcoation object as arguments and prints the user's name and the city they are from



type UserInfo = {
    name: String;
    age : number;
    Loan_status: Boolean
} 


type UserLocation = {
  country : string;
  city : string;
  postal_id : number

}



const user: UserInfo = {
    name: "Ram",
    age: 25,
    Loan_status:true
}

const userLocation:UserLocation = {
    country: 'Nepal',
    city: 'Kathmandu',
    postal_id: 44788
}



const createUserProfile = (userinfo:UserInfo, userloca:UserLocation) =>{
 return {...userinfo, ...userloca}

}



// createUserProfile(user,userLocation);   // func call

const completeUserInfo: UserInfo & UserLocation = createUserProfile(user,userLocation);

console.log(completeUserInfo)







