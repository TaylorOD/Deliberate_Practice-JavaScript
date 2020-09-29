// 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.

const numberTimesTwo = function (number) {
  return number * 2
}

console.log(numberTimesTwo(5))

//   2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.

const capitalStrings = function (string) {
  return string.toUpperCase()
}
console.log(capitalStrings("hello there!"))

//   3. Write a function that takes in two numbers and returns the first number subtracted by the second.Then run the function and print the result.

const firstMinusSecond = function (number1, number2) {
  return number1 - number2
}
console.log(firstMinusSecond(1000, 100))

//   4. Write a function that takes in a number and returns the number times itself.Then run the function and print the result.

const numberTimesNumber = function (number) {
  return number * number
}
console.log(numberTimesNumber(19))

//   5. Write a function that takes in a string and returns the first letter of the string.Then run the function and print the result.

const firstOfString = function (string) {
  return string[0]
}
console.log(firstOfString("taste"))

//   6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between.Then run the function and print the result.

let stringsSpacer = function (string1, string2, string3) {
  return string1 + " " + string2 + " " + string3
}

let sandwich = stringsSpacer("Bacon", "Lettuce", "Tomato")
console.log(sandwich)

//   7. Write a function that takes in a number and returns the number as a string.Then run the function and print the result.

let numberToString = function (number) {
  return number.toString()
}

let largeNumber = numberToString(1929)
console.log(largeNumber)

//   8. Write a function that takes in a string and returns the string repeated 5 times.Then run the function and print the result.

let stringTimesFive = function (string) {
  return string.repeat(5)
}
let stopYell = stringTimesFive("STOP")
console.log(stopYell)


//   9. Write a function that takes in 3 numbers and returns the average(the sum divided by 3.0).Then run the function and print the result.

let average = function (n1, n2, n3) {
  return (n1 + n2 + n3) / 3
}
let testScores = average(68, 100, 83)
console.log(testScores)

//   10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.

let timesTenPlusThirty = function (number) {
  return (number * 10) + 30
}
let fifty = timesTenPlusThirty(50)
console.log(fifty)
