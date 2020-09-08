//  1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

let firstName = "Joe"
let lastName = "Jackson"

console.log("Look it's " + firstName + " " + lastName + "!")

//  2. Write a program that uses variables to store a first and last name, then prints the full name in one line using template strings (the ${} operator).

let firstName = "John"
let lastName = "Lackson"

console.log(`Look it's ${firstName} ${lastName}!`)

//  3. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with template strings (the ${} operator).

let bookTitle = "The Big Bang"
let bookAuthor = "Scientists"

console.log(`If you believe in the Christian idea of Creation you should also research ${bookTitle} theory popularized by ${bookAuthor}.`)

//  4. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

let cityOne = "Chicago"
let cityTwo = "Atlanta"
let cityThree = "Denver"

console.log("I'd rather live in " + cityOne + " or " + cityThree + " than " + cityTwo + ".")

//  5. Write a program that stores a varible as a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

let password = "Joshua"

if (password === "Joshua") {
  console.log("Shall we play a game?")
} else {
  console.log("Access denied.")
}

//  6. Write a program that uses variables to store a movies's title and lead actor, then prints out a sentence using that information using string concatenation (the + operator).

let movieTitle = "Castaway"
let movieStar = "Wilson"

console.log(`Once the lead character in ${movieTitle}, ${movieStar}, drowns I almost left the movie theater.`)

//  7. Write a program that uses variables to store three different colors, then prints out a sentence using that information with template strings (the ${} operator).

let colorOne = "Red"
let colorTwo = "Blue"
let colorThree = "Black"

console.log(`The outfit I chose was wrong. My hat was ${colorTwo}, shirt ${colorThree}, and pants ${colorOne}.`)

//  8. Write a program that uses variables to store three different website URL's, then prints out a sentence using the URL's using string concatenation (the + operator).

let websiteOne = "hackernews.com"
let websiteTwo = "twitter.com"
let websiteThree = "facebook.com"

console.log("Most people on " + websiteOne + " hate " + websiteThree + " but still like " + websiteTwo + ".")

//  9. Write a program that uses variables to store a coffee order and price, then prints the coffe order and price in one line using string concatenation (the + operator).

let order = "Black Coffee"
let price = 3.50

console.log("Your " + order + " will cost $" + price + ".")

//  10. Write a program that uses variables to store a tea order and price, then prints the tea order and price in one line using template strings (the ${} operator).

let teaOrder = "Earl Gray"
let price = 2.50

console.log(`Your hot ${teaOrder} will be $${price}.`)
