// I want this function to return the length of the string passed in


function getSize(string) {
    return string.length;
}
console.log("string: bob", getSize("bob"));
// The log above should return as "3"

console.log("string: the lazy dog", getSize("the lazy dog"));
//  The log above should return as "12"

// I want a function that returns if the string has the letter "A"
function hasA(str){

    let lowerVersion = str.toLowerCase()
    
    return str.toLowerCase().includes('a')
// Take this string and get the lowercase version of it, and check if 
// it has "a"
}

// How do I get a partial string?
let sentence = "The brown fox jumped over the lazy dog"

// I only want the word "brown" omitted from the string

// Possible options include:
// split
// slice
// substr

// function should return the first 10 characters of the string that is passed in
function preview(longString){
    return longString.substr(0,10);
// This will return a substring starting at position 0 and will return the 10
// following characters
}

// the brown...
preview("the brown fox jumped over the lazy dog")

// in the beg...
preview("in the beginning, there was code and nothing else")

// How do I find a specific position of needle in the haystack
// what function will give me this?
// try using indexOf and lastIndexOf
function find (haystack, needle){
    return haystack.indexOf(needle);
}

console.log(find("the brown fox, b"));  
console.log(find("the brown fox, o"));