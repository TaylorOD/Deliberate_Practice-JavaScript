// 1. Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].

const numbers = [1, 2, 3]

const numbersTimesThree = numbers.map(number => number * 3)
console.log(numbersTimesThree)

const numbersTimesThreeLong = numbers.map(function(number) {
  return number * 3
})
console.log(numbersTimesThreeLong)

// 2. Start with an array of strings and create a new array with each string upcased.
// For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

const strings = ["hello", "goodbye"]

const stringsUpcased = strings.map(string => string.toUpperCase())
console.log(stringsUpcased)

const stringsUpcasedLong = strings.map(function(string) {
  return string.toUpperCase()
})
console.log(stringsUpcasedLong)

// 3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

const peopleInfo = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]

const peopleNames = peopleInfo.map(person => person.name)
console.log(peopleNames)

const peopleNamesLong = peopleInfo.map(function(person) {
  return person.name
})
console.log(peopleNamesLong)

// 4. Start with an array of numbers and create a new array with each number plus 7.
// For example, [1, 2, 3] becomes [8, 9, 10].

const numbersArray = [1, 2, 3]

const numbersPlusSeven = numbersArray.map(number => number + 7)
console.log(numbersPlusSeven)

const numbersPlusSevenLong = numbersArray.map(function(number) {
  return number + 7
})
console.log(numbersPlusSevenLong)

// 5. Start with an array of strings and create a new array with each string's length.
// For example, ["hello", "goodbye"] becomes [5, 7].

const stringsArray = ["hello", "goodbye"]

const stringsArrayLength = stringsArray.map(string => string.length)
console.log(stringsArrayLength)

const stringsArrayLengthLong = stringsArray.map(function(string) {
  return string.length
})
console.log(stringsArrayLengthLong)

// 6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

const peopleInformation = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]

const peopleAges = peopleInformation.map(person => person.age)
console.log(peopleAges)

const peopleAgesLong = peopleInformation.map(function(person) {
  return person.age
})
console.log(peopleAgesLong)

// 7. Start with an array of numbers and create a new array with each number divided by 2.
// For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

const arrayNumbers = [1, 2, 3]

const numbersHalved = arrayNumbers.map(number => number / 2)
console.log(numbersHalved)

const numbersHalvedLong = arrayNumbers.map(function(number) {
  return number / 2
})
console.log(numbersHalvedLong)

// 8. Start with an array of strings and create a new array with each string's first letter only.
// For example, ["hello", "goodbye"] becomes ["h", "g"].

const stringArray = ["hello", "goodbye"]

const stringFirst = stringArray.map(string => string[0])
console.log(stringFirst)

const stringFirstLong = stringArray.map(function(string) {
  return string[0]
})
console.log(stringFirstLong)

// 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

const personsInfo = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]

const agesTimesTwo = personsInfo.map(person => person.age * 2)
console.log(agesTimesTwo)

const agesTimesTwoLong = personsInfo.map(function(person) {
  return person.age * 2
})
console.log(agesTimesTwoLong)

// 10. Start with an array of numbers and create a new array with each number converted into a string.
// For example, [1, 2, 3] becomes ["1", "2", "3"].

const numberStrings = [1, 2, 3]

const numbersToStrings = numberStrings.map(number => number.toString())
console.log(numbersToStrings)

const numbersToStringsLong = numberStrings.map(function(number) {
  return number.toString()
})
console.log(numbersToStringsLong)
