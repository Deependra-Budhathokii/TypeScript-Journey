
// Tuples in TypeScript : Matsering Data Structures

// Defining a tuple for person information(with name, age and driving licence )
type PersonInfo = readonly [string, number, boolean, boolean?]


// Example usage
const person1:PersonInfo = ["Jade", 20, true] 
const person2:PersonInfo = ["David", 22, false]
// const person2:PersonInfo = [22,"David", false]  // Tuple ensure order 


const displayPersonInfo = (person:PersonInfo) =>{
    const[name, age, hasDriverLicence] = person

    console.log(`Name: ${name}, Age: ${age}, Driver's License Status: ${hasDriverLicence ? "yes" : "No"}`)
}


displayPersonInfo(person1)
displayPersonInfo(person2)

