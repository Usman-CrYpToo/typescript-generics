// Implement a Generic Identity Function:
// Write a generic function named identity that takes an argument and simply returns it. Ensure that the type of the input argument is preserved in the return type.


const identity = <T>(arg: T) : T =>{
     return arg;
}

const str = identity<string>("usman");
console.log(str);