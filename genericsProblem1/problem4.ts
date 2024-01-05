// Generic Function to Merge Objects:
// Write a function mergeObjects that takes two objects and merges them into one. The function should be generic and should preserve the types of the input objects in the output.


const mergeObjects = <ob1 = object, ob2 = object>(obj1 : ob1, obj2: ob2) :ob1 & ob2 => {
   return {
       ...obj1,
       ...obj2
   }
}

const _obj1 = {
     name : "usman",
     age : 14
}

const _obj2 = {
     year : 2024,
     msg : "thank you"
}

const _mergeObject = mergeObjects(_obj1, _obj2);
console.log(_mergeObject);