// #  1. Start with an array of numbers and create a new array with only the numbers less than 20.
// #     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

let numbers = [2, 32, 80, 18, 12, 3] 

const lessThanTwenty = numbers.filter(number => number < 20)
console.log(lessThanTwenty)

const lessThanTwentyLong = numbers.filter(function (number) {
  return number < 20
})
console.log(lessThanTwentyLong)

// #  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
// #     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

let strings = ["winner", "winner", "chicken", "dinner"]

const winningStrings = strings.filter(string => string[0] === "w")
console.log(winningStrings)

const winningStringsLong = strings.filter(function (string) {
  return string[0] === "w"
})
console.log(winningStringsLong)

// #  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

let itemsInfo = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]

const itemsGreaterThanFive = itemsInfo.filter(item => item.price > 5)
console.log(itemsGreaterThanFive)

const itemsGreaterThanFiveLong = itemsInfo.filter(function (item) {
  return item.price > 5
})
console.log(itemsGreaterThanFiveLong)

// #  4. Start with an array of numbers and create a new array with only the even numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

let numbers = [2, 4, 5, 1, 8, 9, 7]

const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers)

const evenNumbersLong = numbers.filter(function (number) {
  return number % 2 === 0
})
console.log(evenNumbersLong)

// #  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// #     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

let strings = ["a", "man", "a", "plan", "a", "canal", "panama"]

const stringsUnderFour = strings.filter(string => string.length < 4)
console.log(stringsUnderFour)

const stringsUnderFourLong = strings.filter(function (string) {
  return string.length < 4
})
console.log(stringsUnderFourLong)

// #  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

let itemsInfo = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]

const itemNameLessThanSix = itemsInfo.filter(item => item.name.length < 6)
console.log(itemNameLessThanSix)

const itemNameLessThanSixLong = itemsInfo.filter(function (item) {
  return item.name.length < 6
})
console.log(itemNameLessThanSixLong)

// #  7. Start with an array of numbers and create a new array with only the numbers less than 10.
// #     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

let numbers = [8, 23, 0, 44, 1980, 3]

const numbersLessThanTen = numbers.filter(number => number < 10)
console.log(numbersLessThanTen)

const numbersLessThanTenLong = numbers.filter(function (number) {
  return number < 10
})
console.log(numbersLessThanTenLong)

// #  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// #     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

let strings = ["big", "little", "good", "bad"]

const stringsOtherThanB = strings.filter(string => string[0] != "b")
console.log(stringsOtherThanB)

const stringsOtherThanBLong = strings.filter(function (string) {
  return string[0] != "b"
})
console.log(stringsOtherThanBLong)

// #  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

let itemsInfo = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]

const itemsLessThanTen = itemsInfo.filter(item => item.price < 10)
console.log(itemsLessThanTen)

const itemsLessThanTenLong = itemsInfo.filter(function (item) {
  return item.price < 10
})
console.log(itemsLessThanTenLong)

// # 10. Start with an array of numbers and create a new array with only the odd numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

let numbers = [2, 4, 5, 1, 8, 9, 7]

const oddNumbers = numbers.filter(number => number % 2 === 1)
console.log(oddNumbers)

const oddNumbersLong = numbers.filter(function (number) {
  return number % 2 === 1
})
console.log(oddNumbersLong)
