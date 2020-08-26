'use strict'
// If a word starts with a vowel
// the piglatin translation is "add yay" to the end

// If the word does not start with a vowel but has a vowel in the middle
// split the word into 2 parts
// Part1: all the letters before the vowel
// Part2: a;; the letters starting at the vowel
// then swap those 2 parts, and add 'ay' to the end 


// If the word does not have a vowel, ad "ay" to the end 



// just showed to check if a single letter is a vowel 
// you can use 'aeiou'.includes(letter)

function printLetter(word){
    let letters = word.split('')
    for( let i=0; i<letters; i++){
        console.log(letters[i]);
    }
}

printLetter("the brown fox jumped over the red dog");