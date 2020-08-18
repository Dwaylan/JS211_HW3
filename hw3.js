'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});


// If a word starts with a vowel
// the piglatin translation is "add yay" to the end

// If the word does not start with a vowel but has a vowel in the middle
// split the word into 2 parts
// Part1: all the letters before the vowel
// Part2: all the letters starting at the vowel
// then swap those 2 parts, and add 'ay' to the end 
// If the word does not have a vowel, ad "ay" to the end 

// just showed to check if a single letter is a vowel 
// you can use 'aeiou'.includes(letter)

const pigLatin = (word) => {
// The function is "pigLatin"
// "word" is the name of the argument passed

word= word.toLowerCase().trim()
// "toLowerCase" takes a word in as an arguement and makes all letters lowercase
// "trim" take in the word that was passed through "toLowerCase" and removes the
// spaces between the letters of said word
// notice the use of dot notation

let initialVowel = word.match(/aeiou/);
// The match() method searches a string for a match against a regular expression,
//  and returns the matches, as an Array object.
// "initial vowel" takes "word" and uses "match" and passes vowels in the 
// arguement to locate a a vowel
// So far our 1.) Our first funtion "pigLatin" takes in "word" as an argument
// 2.) "word" is converted to lowercase and the white space between the letters is trimmed
// 3.) our "initialVowel" takes the converted lowercase word and searches for a vowel

let placement = word.indexOf(initialVowel);
// The indexOf() method returns the position of the first occurrence of a specified value in a string.
// so by passing "initialVowel" as the arguement we are looking for the index of the
// first vowel aka "aeiou"

// If else statements
if(placement > 0) {
    return word.slice(placement) + word.slice(0, placement) + 'ay';
// ** The slice() method returns the selected elements in an array, as a new array object.**
// if the initial placement of the vowel in a word has an index greater than 0,
// return the word BUT sliced placement  at the beginning and "ay" at the 
// end
}else if(initialVowel== null){
    return word + 'ay'
}else if(initialVowel !== null){
return word + 'yay'
}
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
});
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
    assert.equal(pigLatin('car'), 'arcay');
    assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
    assert.equal(pigLatin('create'), 'eatecray');
    assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
    assert.equal(pigLatin('egg'), 'eggyay');
    assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
    assert.equal(pigLatin('HeLlO '), 'ellohay');
    assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
});
} else {

getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.