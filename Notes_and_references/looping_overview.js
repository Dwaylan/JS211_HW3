// Loops are a way to repeat, or iterate, over a JavaScript thing and perform a certain 
// block of code over and over until the stop condition is met.

// The common loops we use as web developers are, listed from most often used to least often used:

// for - loops through a block of code a specific number of times
// for/of - loops through the values of an iterable object like an array.
// for/in - loops through the properties of an object or indexes of an array.
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true



// In the example below, we use a for loop to print out numbers from 1 - 10.
const countUpToTen = () => {
    for (let i = 1; i <= 10; i++) {
    console.log(i);
    }
}
// The initial expression is i=1
// The condition is "i<=10" meaning "i" is less than or equal to 10
// The increment expression is "i++" meaning the iterator aka "i" will steadily increase  

countUpToTen()
// countUpToTen() calls the function


// Once again:
// for (let i = 1; i <= 10; i++)
// for() looks just like a function invocation. And it is. We pass into it the following argument:
// let i = 1; is the initial expression. It states that the iterator, i, will start at 1.
// i <= 10; is the stop condition. It states that the loop will stop when the iterator reaches 10 or more.
// i++ is the increment expression. It increases the iterator by 1 each time the loop runs through.

// for ([initial expression]; [stop condition]; [increment expression]){
//     action statement
// }