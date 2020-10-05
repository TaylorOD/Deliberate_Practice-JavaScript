// #  1. Use a nested loop to convert an array of number pairs into a single flattened array.
// #     For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

let numberPairs = [
  [1, 3],
  [8, 9],
  [2, 16]
]
let index1 = 0
let flatArray = []

while (index1 < numberPairs.length) {
  let index2 = 0
  let firstLoop = numberPairs[index1]
  while (index2 < firstLoop.length) {
    flatArray.push(firstLoop[index2])
    index2 += 1
  }
  index1 += 1
}
console.log(flatArray)

// #  2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// #     For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

let lettersOne = ["a", "b", "c"]
let lettersTwo = ["d", "e", "f", "g"]
let combinedLetters = []
let index1 = 0
while (index1 < lettersOne.length) {
  let index2 = 0
  while (index2 < lettersTwo.length) {
    combinedLetters.push(lettersOne[index1] + lettersTwo[index2])
    index2 += 1
  }
  index1 += 1
}
console.log(combinedLetters)

// #  3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// #     For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

let strings = ["a", "b", "c", "d"]
let combinedStrings = []
let index1 = 0
while (index1 < strings.length) {
  let index2 = 0
  while (index2 < strings.length) {
    if (index1 !== index2) {
      combinedStrings.push(strings[index1] + strings[index2])
    }
    index2 += 1
  }
  index1 += 1
}
console.log(combinedStrings)

// #  4. Use a nested loop to find the largest product of any two different numbers within a given array.
// #     For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

let numbers = [5, -2, 1, -9, -7, 2, 6]
let largestProduct = numbers[0] * numbers[1]
let index1 = 0
while (index1 < numbers.length) {
  let index2 = 0
  while (index2 < numbers.length) {
    if (index1 !== index2) {
      if (numbers[index1] * numbers[index2] > largestProduct) {
        largestProduct = numbers[index1] * numbers[index2]
      }
    }
    index2 += 1
  }
  index1 += 1
}
console.log(largestProduct)

// #  5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// #     For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

let numberPairs = [
  [1, 3],
  [8, 9],
  [2, 16]
]
let result = 0
let index1 = 0
while (index1 < numberPairs.length) {
  let index2 = 0
  let currentLoop = numberPairs[index1]
  while (index2 < currentLoop.length) {
    result = result + currentLoop[index2]
    index2 += 1
  }
  index1 += 1
}
console.log(result)

// #  6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// #     For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

let numbersOne = [1, 2]
let numbersTwo = [6, 7, 8]
let result = []
let index1 = 0
while (index1 < numbersOne.length) {
  let index2 = 0
  while (index2 < numbersTwo.length) {
    result.push(numbersOne[index1] + numbersTwo[index2])
    index2 += 1
  }
  index1 += 1
}
console.log(result)

// #  7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// #     For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

let numbers = [2, 8, 3]
let result = []
let index1 = 0
while (index1 < numbers.length) {
  let index2 = 0
  while (index2 < numbers.length) {
    result.push(numbers[index1] * numbers[index2])
    index2 += 1
  }
  index1 += 1
}
console.log(result)

// #  8. Use a nested loop to find the largest sum of any two different numbers within an array.
// #     For example, [1, 8, 3, 10] becomes 18.

let numbers = [1, 8, 3, 10]
let result = numbers[0] + numbers[1]
let index1 = 0
while (index1 < numbers.length) {
  let index2 = 0
  while (index2 < numbers.length) {
    if (index1 !== index2) {
      if (numbers[index1] + numbers[index2] > result) {
        result = numbers[index1] + numbers[index2]
      }
    }
    index2 += 1
  }
  index1 += 1
}
console.log(result)

// #  9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// #     For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

let numbers = [2, 5, 3, 1, 0, 7, 11]
var result = false
let index1 = 0
while (index1 < numbers.length) {
  let index2 = 0
  while (index2 < numbers.length) {
    if (index1 !== index2) {
      if (numbers[index1] + numbers[index2] === 10 && result === false) {
        result = [numbers[index1], numbers[index2]]
      }
    }
    index2 += 1
  }
  index1 += 1
}
console.log(result)

// # 10. Use a nested loop to convert an array of string arrays into a single string.
// #     For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

let strings = [
  ["a", "man"],
  ["a", "plan"],
  ["a", "canal"],
  ["panama"]
]
let result = ""
let index1 = 0
while (index1 < strings.length) {
  let index2 = 0
  let currentLoop = strings[index1]
  while (index2 < currentLoop.length) {
    result = result + currentLoop[index2]
    index2 += 1
  }
  index1 += 1
}
console.log(result)
