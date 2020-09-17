// 1. Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.

let num = 9100

if (num > 9000) {
  console.log(1)
}
else {
  console.log(-1)
}

// 2. Use a variable to store a number, then write a condition that prints 100 if the number equals 100, prints 99 if the number is equal to 99, and prints 0 otherwise.

let num = 99

if (num == 100) {
  console.log(100)
} else if (num == 99) {
  console.log(99)
} else {
  console.log(0)
}

// 3. Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero and the second number is greater than 0, and prints 0 otherwise.

let num = -10
let numTwo = 11

if (num < 0 && numTwo > 0) {
  console.log(1)
} else {
  console.log(0)
}

// 4. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

let cityOne = "Chicago"
let cityTwo = "Greenville"
let cityThree = "Houston"

console.log("I'd love to visit " + cityOne + " but I don't know about " + cityTwo + " or " + cityThree + ".")

// 5. Write a program that uses variables to store a movies's title and lead actor, then prints out a sentence using that information using string concatenation (the + operator).

let movieStar = "Bruce Willis"
let movieTitle = "Die Hard"

console.log(`My favorite character in ${movieTitle} is ${movieStar}. But the German bad guy is cool too.`)
