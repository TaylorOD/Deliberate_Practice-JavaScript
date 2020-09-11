// # 1. Make a object to store a person's first name, last name, and email address. Then print each attribute on separate lines.

let personInfo = {
  firstName: "Tod",
  lastName: "Dobbie",
  emailAddress: "dobbietod@gmail.com"
}

console.log(personInfo.firstName)
console.log(personInfo.lastName)
console.log(personInfo.emailAddress)

// # 2. Make a object to store prices for 3 different menu items. Then print the price of the third to see the result.

let menuItems = {
  burger: 5.50,
  fries: 3.50,
  drink: 2.50
}

console.log(menuItems.drink)

// # 3. Make a object to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

let bookStoreInfo = {
  title: "The Shining",
  author: "Stephen King",
  numOfPages: 1056,
  language: "English"
}

console.log(bookStoreInfo.title)
console.log(bookStoreInfo.author)
console.log(bookStoreInfo.numOfPages)
console.log(bookStoreInfo.language)

// # 4. Make objects to store the title and author for 3 different books.Then print out the third book's author using a function.

let bookOneInfo = {
  title: "Mooncop",
  author: "Tom Gauld"
}
let bookTwoInfo = {
  title: "Eat a Peach",
  author: "David Chang"
}
let bookThreeInfo = {
  title: "Chanlands",
  author: "Sam Heughan"
}

let getBookAuthor = function (author) {
  return author.author
}

console.log(getBookAuthor(bookThreeInfo))

// # 5. Make objects to store the first name and last name for 3 different people. Then print out the first person's info seperated by a space using a function.

let personOneInfo = {
  firstName: "Sonny",
  lastName: "Hedgemen"
}

let personTwoInfo = {
  firstName: "Luke",
  lastName: "Bayknock"
}

let personThreeInfo = {
  firstName: "Stan",
  lastName: "Wrinkel"
}

let nameFinder = function (inputPerson) {
  return `${inputPerson.firstName} ${inputPerson.lastName}`
}

console.log(nameFinder(personOneInfo))

// # 6. Make an object to store 3 different states and their captitals.

let statesCapitals = {
  vermont: "Montpillier",
  colorado: "Denver",
  texas: "Austin"
}


// # 7. Make an object to store a phone's brand, model, and year. Then print each attribute on separate lines.

let phoneDetails = {
  brand: "Samsung",
  model: "Galaxy 2",
  year: 2017
}

console.log(phoneDetails.brand)
console.log(phoneDetails.model)
console.log(phoneDetails.year)

// # 8. Make objects to store the brand and model for 3 different phones.Then write a function print out the second laptop's model.

let phoneDetailsOne = {
  brand: "Samsung",
  model: "Galaxy 2",
  year: 2017
}
let phoneDetailsTwo = {
  brand: "Samsung",
  model: "SE",
  year: 2016
}
let phoneDetailsThree = {
  brand: "Google",
  model: "Pixal",
  year: 2015
}

let phoneModel = function (phone) {
  return phone.model
}
console.log(phoneModel(phoneDetailsTwo))

// # 9. Make an object to store definitions for 2 different words.Then print the 2nd.

let definitions = {
  hotsauce: "spicy mix of pepers in a liquid form",
  cookie: "a tasty treat made of sugar and often with nuts"
}

console.log(definitions.cookie)

// # 10. Make an object to store a shirt's brand, color, and size. Then print each attribute on separate lines.

let shirtInfo = {
  brand: "Hanes",
  color: "Blue",
  size: "L"
}

console.log(shirtInfo.brand)
console.log(shirtInfo.color)
console.log(shirtInfo.size)
