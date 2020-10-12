// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

let numbers = [1, 2, 3]
let numbersTimesThree = []
for (var index = 0; index < numbers.length; index += 1) {
  numbersTimesThree.push(numbers[index] * 3)
}
console.log(numbersTimesThree)

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

let strings = ["hello", "goodbye"]
let stringsUpcase = []
for (var index = 0; index < strings.length; index += 1) {
  stringsUpcase.push(strings[index].toUpperCase())
}
console.log(stringsUpcase)


// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

let peopleInfo = [{
  name: "Alice",
  age: 27
}, {
  name: "Blane",
  age: 16
}]
let peopleNames = []

for (var index = 0; index < peopleInfo.length; index += 1) {
  peopleNames.push(peopleInfo[index].name)
}
console.log(peopleNames)

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

let numbers = [1, 2, 3]
let numbersPlusSeven = []
for (var index = 0; index < numbers.length; index += 1) {
  numbersPlusSeven.push(numbers[index] + 7)
}
console.log(numbersPlusSeven)

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

let strings = ["hello", "goodbye"]
let stringsLength = []
for (var index = 0; index < strings.length; index += 1) {
  stringsLength.push(strings[index].length)
}
console.log(stringsLength)

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

let peopleInfo = [{
  name: "Alice",
  age: 27
}, {
  name: "Blane",
  age: 16
}]
let peopleAges = []
for (var index = 0; index < peopleInfo.length; index += 1) {
  peopleAges.push(peopleInfo[index].age)
}
console.log(peopleAges)

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

let numbers = [1, 2, 3]
let numbersHalf = []
for (var index = 0; index < numbers.length; index += 1) {
  numbersHalf.push(numbers[index] / 2)
}
console.log(numbersHalf)

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

// let strings = ["hello", "goodbye"]

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// let peopleInfo = [{
//   name: "Alice",
//   age: 27
// }, {
//   name: "Blane",
//   age: 16
// }]

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].

// let numbers = [1, 2, 3]
