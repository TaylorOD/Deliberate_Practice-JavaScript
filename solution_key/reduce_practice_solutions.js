// #  1. Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

let numbers = [5, 10, 8, 3]

const sumNumbers = numbers.reduce(((sum, number) => sum + number), 0)
console.log(sumNumbers)

const sumNumbersLong = numbers.reduce(function (sum, number) {
  return sum + number
}, 0)
console.log(sumNumbersLong)

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

let strings = ["volleyball", "basketball", "badminton"]

const stringsCombined = strings.reduce(((combined_string, string) => combined_string + string), "")
console.log(stringsCombined)

const stringsCombinedLong = strings.reduce(function (combined_string, string) {
  return combined_string + string
}, "")
console.log(stringsCombinedLong)

// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

let itemsInfo = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]

const itemPriceSum = itemsInfo.reduce((sum, item) => (sum + item.price), 0)
console.log(itemPriceSum)

const itemPriceSumLong = itemsInfo.reduce(function (sum, item) {
  return sum + item.price
}, 0)
console.log(itemPriceSumLong)

// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.

let numbers = [5, 10, 8, 3, 9]

const minimumNumber = numbers.reduce(function (minNumber, number) {
  if (number < minNumber) {
    return number
  } else {
    return minNumber
  }
}, numbers[0])
console.log(minimumNumber)

// #  5. Start with an array of strings and compute the total length of all the strings.
// #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

let strings = ["volleyball", "basketball", "badminton"]

const stringsLength = strings.reduce((length, string) => (length + string.length), 0)
console.log(stringsLength)

const stringsLengthLong = strings.reduce(function (length, string) {
  return length + string.length
}, 0)
console.log(stringsLengthLong)

// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

let itemsInfo = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]

const lowestPriceItem = itemsInfo.reduce(function (lowestPrice, item) {
  if (item.price < lowestPrice) {
    return item
  } else {
    return lowestPrice
  }
}, itemsInfo[0].price)
console.log(lowestPriceItem)

// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.

let numbers = [5, 10, 8, 3]

const productOfNumbers = numbers.reduce((product, number) => (product * number), 1)
console.log(productOfNumbers)

const productOfNumbersLong = numbers.reduce(function (product, number) {
  return product * number
}, 1)
console.log(productOfNumbersLong)

// #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

let sportsStrings = ["volleyball", "basketball", "badminton"]

const sportsStringsCombo = sportsStrings.reduce((targetString, sportString) => (targetString + (sportString + "-")), "-")
console.log(sportsStringsCombo)

const sportsStringsComboLong = sportsStrings.reduce(function (targetString, sportString) {
  return targetString + (sportString + "-")
}, "-")
console.log(sportsStringsComboLong)

// #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

let itemsInfoObject = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]

const shortestItemName = itemsInfoObject.reduce(function (targetName, currentName) {
  if (targetName > currentName.name.length) {
    return currentName
  } else {
    return targetName
  }

}, itemsInfoObject[0].name.length)
console.log(shortestItemName)

// # 10. Start with an array of numbers and compute the maximum number.
// #     For example, [5, 10, 8, 3] becomes 10.
