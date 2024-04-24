

enum Roles {
    user = "user", 
    admin = "admin"
}


type LoginDetails = {
    name? : string;
    email : string;
    password : string;
    role : Roles
}


const user1: LoginDetails = {
    name: "Ryan Shrestha",
    email: "rayan@gmail.com",
    password: "dhas",
    role: Roles.user

}

const user2: LoginDetails = {
    email : "hari@gmail.com",
    password: "ajds",
    role: Roles.admin

}




// console.log(user1.email)
// console.log(user2.role)

const isAdmin = (user1:LoginDetails):string =>{
    const{email,password,name,role} = user1

    return role === "admin" ?`${name} with a email id ${email} is a admin and is allowed to edit a webiste` :`${name} is not a admin so is not allowed to edit website`
    
} 


console.log(isAdmin(user1))