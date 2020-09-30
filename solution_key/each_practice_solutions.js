// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

let numbers = [1, 2, 3]

numbers.forEach(function (number) {
  console.log(number * 3)
})

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

let strings = ["hello", "goodbye"]

strings.forEach(function (string) {
  let upcaseStrings = []
  upcaseStrings.push(string.toUpperCase())
  console.log(upcaseStrings)
})

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

let peopleInfo = [{
  name: "Alice",
  age: 27
}, {
  name: "Blane",
  age: 16
}]
peopleInfo.forEach(function (people) {
  let peopleNames = []
  peopleNames.push(people.name)
  console.log(peopleNames)
})

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

let numbers = [1, 2, 3]
numbers.forEach(function (number) {
  let numbersPlusSeven = []
  numbersPlusSeven.push(number + 7)
  console.log(numbersPlusSeven)
})

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

let strings = ["hello", "goodbye"]
strings.forEach(function (string) {
  let stringsLength = []
  stringsLength.push(string.length)
  console.log(stringsLength)
})

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

let peopleInfo = [{
  name: "Alice",
  age: 27
}, {
  name: "Blane",
  age: 16
}]
peopleInfo.forEach(function (people) {
  let peopleAges = []
  peopleAges.push(people.age)
  console.log(peopleAges)
})

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

let numbers = [1, 2, 3]
numbers.forEach(function (number) {
  let numbersDividedByTwo = []
  numbersDividedByTwo.push(number / 2)
  console.log(numbersDividedByTwo)
})

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

let strings = ["hello", "goodbye"]
strings.forEach(function (string) {
  let stringFirst = []
  stringFirst.push(string[0])
  console.log(stringFirst)
})

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].
