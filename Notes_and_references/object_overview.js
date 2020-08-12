// The simple rule about creating an object's keys is that they must be strings, 
// usually words, or even symbols while the the values can be any data type including
//  Array, Object, Function, Boolean, Number, String, or Byte.

const person = {
    firstName: "Keith",
    lastName: "Murgic",
    age: 31,
    eyeColor: "brown"
};

console.log(person.firstName) // => "Keith"
console.log(person.age) // 31
// Square bracket notation is also valid.
// Example: console.log(person['age']) will call the age of said person
// The variable inside of bracket notation MUST be a string

// To get the value of the id key of this object we use dot notation, exampleObject.id. 
// It would not matter if id was the first key or the three thousandth key, all we would 
// need to access that information/data is the object's variable name, exampleObject and the key name, id.

// You create an object the same way you declare any other data type:

// First declare const
// Then name the object, person
// Point it at the object, =
// But instead of square-brackets, use curly-braces, {}
// After that separate the keys and values by colons, :
// Finally, separate key-value pairs by commas, ,