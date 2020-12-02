// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9]. Use .forEach and .map.

// .forEach

let numbers = [1, 2, 3]
let numbersTimesThree = []

numbers.forEach(number => numbersTimesThree.push(number * 3))
console.log(numbersTimesThree)

let numbersTimesThreeLong = []

numbers.forEach(function (number) {
  numbersTimesThreeLong.push(number * 3)
})
console.log(numbersTimesThreeLong)

// .map

const numbersTimesThreeMap = numbers.map(number => number * 3)
console.log(numbersTimesThreeMap)

const numbersTimesThreeMapLong = numbers.map(function(number) {
  return number * 3
})
console.log(numbersTimesThreeMapLong)

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"]. Use .forEach and .map.

// .forEach

let strings = ["hello", "goodbye"]
let stringsUpcasedForEach = []

strings.forEach(string => stringsUpcasedForEach.push(string.toUpperCase()))
console.log(stringsUpcasedForEach)

let stringsUpcasedForEachLong = []
strings.forEach(function(string) {
  stringsUpcasedForEachLong.push(string.toUpperCase())
})
console.log(stringsUpcasedForEachLong)

// .map

const stringsUpcasedMap = strings.map(string => string.toUpperCase())
console.log(stringsUpcasedMap)

const stringsUpcasedMapLong = strings.map(function(string) {
  return string.toUpperCase()
})
console.log(stringsUpcasedMapLong)

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"]. Use .forEach and .map.

// .forEach

let peopleInfo = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]
let peoplesName = []

peopleInfo.forEach(function(person) {
  peoplesName.push(person.name)
})
console.log(peoplesName)

let peoplesNameLong = []

peopleInfo.forEach(person => peoplesNameLong.push(person.name))
console.log(peoplesNameLong)

// .map

let personsName = peopleInfo.map(person => person.name)
console.log(personsName)

let personNameLong = peopleInfo.map(function(person) {
  return person.name
})
console.log(personNameLong)

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10]. Use .forEach and .map.

// .forEach

let numbers = [1, 2, 3]
let numbersPlusSeven = []

numbers.forEach(number => numbersPlusSeven.push(number + 7))
console.log(numbersPlusSeven)

let numbersPlusSevenLong = []

numbers.forEach(function(number) {
  numbersPlusSevenLong.push(number + 7)
})
console.log(numbersPlusSevenLong)

// .map

const numbersPlusSevenMap = numbers.map(number => number + 7)
console.log(numbersPlusSevenMap)

const numbersPlusSevenMapLong = numbers.map(function(number) {
  return number + 7
})
console.log(numbersPlusSevenMapLong)

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7]. Use .forEach and .map.

// .forEach

let strings = ["hello", "goodbye"]

let stringsLength = []

strings.forEach(string => stringsLength.push(string.length))
console.log(stringsLength)

let stringsLengthLong = []

strings.forEach(function(string) {
  stringsLengthLong.push(string.length)
})
console.log(stringsLengthLong)

// .map

let stringsLengthMap = strings.map(string => string.length)
console.log(stringsLengthMap)

let stringsLengthMapLong = strings.map(function (string) {
  return string.length
})
console.log(stringsLengthMapLong)

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16]. Use .forEach and .map.

let personalInfo = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]

// .forEach

let personalAgesLong = []

personalInfo.forEach(function (person) {
  personalAgesLong.push(person.age)
})
console.log(personalAgesLong)

let personalAges = []

personalInfo.forEach(person => personalAges.push(person.age))
console.log(personalAges)

// .map

const personalAgesMap = personalInfo.map(person => person.age)
console.log(personalAgesMap)

const personalAgesMapLong = personalInfo.map(function (person) {
  return person.age
})
console.log(personalAgesMapLong)

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5]. Use .forEach and .map.

let numbers = [1, 2, 3]

// .forEach

let numbersDividedLong = []

numbers.forEach(function(number) {
  numbersDividedLong.push(number / 2)
})
console.log(numbersDividedLong)

let numbersDivided = []

numbers.forEach(number => numbersDivided.push(number/2))
console.log(numbersDivided)

// .map

const numbersDividedMap = numbers.map(number => number/2)
console.log(numbersDividedMap)

const numbersDividedMapLong = numbers.map(function (number) {
  return number / 2
})
console.log(numbersDividedMapLong)

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"]. Use .forEach and .map.

let strings = ["hello", "goodbye"]

// .forEach

let stringsFirst = []

strings.forEach(string => stringsFirst.push(string[0]))
console.log(stringsFirst)

stringsFirstLong = []

strings.forEach(function (string) {
  stringsFirstLong.push(string[0])
})
console.log(stringsFirstLong)

// .map

stringsFirstMap = strings.map(string => string[0])
console.log(stringsFirstMap)

stringsFirstMapLong = strings.map(function (string) {
  return string[0]
})
console.log(stringsFirstMapLong)

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32]. Use .forEach and .map.

// .forEach


// .map

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"]. Use .forEach and .map.

// .forEach


// .map
