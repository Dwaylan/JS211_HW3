//  The first method we'll cover is .create() because it helps introduce OOP, 
// object-oriented programming, in a small and helpful way. You see, when we
//  create an app with multiple users, each of our users will have similar data
//  structures like: name, id, password, email, phone, address, and username. 
// Each of these pieces of data will become our keys which create a template for
//  all new users of our app to follow. This template structure is the basis of 
// object-oriented programming where we only have to build the template once so
//  we can reuse it over and over again as our app and database grow:






// create a template object that holds the keys we'll need for each of our users
const ourUserTemplate = {
    name: "",
    id: Number,
    password: "",
    email: "",
    phone: "",
    address: "",
    username: "",
    location: "",
    printNameOnHomeScreen: function () {
    return `Hello, ${this.name}. It looks like you're in ${this.location}.`;
    }
}

  // create a new user with the Object.create() method and the template object passed into it.
const constantineAlfonso = Object.create(ourUserTemplate)

  // add a value to the name key of the new object & a value to the location key
constantineAlfonso.name = "Constantine Alfonso"
constantineAlfonso.location = "Dallas, TX"

  // log out the value
console.log(constantineAlfonso.printNameOnHomeScreen())
