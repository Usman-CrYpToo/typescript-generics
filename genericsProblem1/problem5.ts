// Generic Constraints with an Interface:
// Implement a generic function getProperty that takes an object and a key and returns the value of the object at that key. Use a generic constraint to ensure that the key exists on the object.

interface user {
    id : number;
    name : string ;
    email : string ;
}


const getProperty = <T extends user>(value : T, property: keyof T) => {
    return value[property];
}

const User  = {
     id : 1,
     name: "usman",
     email: "usman@gmail.com",
     msg: "thank you"
}

console.log(getProperty(User, "msg"))