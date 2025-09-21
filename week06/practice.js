// const greet = (name, formatter) => formatter(name)
// const shout = text => text.toUpperCase() + '!!!'
// console.log(greet('Alice', shout)) // ALICE!!!

// const f1 = say => say.toLowerCase() + ' Nice to meet you'
// console.log(greet('Alice', f1));

const subfunction = (fname,lname) => fname + " " + lname + " This is function"
const name = (fname,lname,formatter) => formatter(fname,lname);
console.log(name('Amares','Choomkamol',subfunction)) 

// Nested function
function addSquares(a, b) {
function square(x) {
return x * x
}
return square(a) + square(b)
}

//  Nested Arrow function
const addSquares2 = (a, b) => {
const square = (x) => x * x
return square(a) + square(b)
}

// The following let variables are defined in the global scope
let mid = 20
let final = 5
let fname = 'Ada'
// sum function is defined in the global scope
function sum() {
return mid + final
}
console.log(`#1 sum: ${sum()}`) // Returns 25
mid = 10
console.log(`#2 sum: ${sum()}`) // Returns 15
function getScore() {
let mid = 10
let final = 30
//yourScore is nested function
function yourScore() {
return fname + ' scored ' + (mid + final)
}
return yourScore
}
// const score = getScore()
// console.log(score()) // Returns "Ada scored 40"

let y = 100 //global variable
sum = 5
sum = 2
function getScore(x) {
  //   let y = 10 //local variable
  //global function
  let mid = 40
  let final = 30
  function doSomething() {
    // console.log(`dosomething: ${y + sum + x + mid + final}`)
    return `dosomething: ${y + sum + x + mid + final}`
    //83
    //y (global),sum(global), y (local), x(local (parameter)) mid (local), final (local)
  }
  doSomething()
  return mid + final + x + y + sum
  //   return doSomething()
}
const score = getScore(1)
console.log(score)
// console.log(doSomething()) //cannot access
// console.log(x, mid, final) //cannot access
 
function makeAdder(x) {
 return function(y) {
 return x + y
 }
}
const add5 = makeAdder(5) //add5 จำค่า x = 5
const add10 = makeAdder(10) //add10 จำค่า x = 10
console.log(add5(3)) // 8
console.log(add10(3)) // 13


function idGenerator() {
  let Id = 0
  return function () {
    Id += 1
    return Id
  }
}
const idGen = idGenerator()
console.log(idGen())
console.log(idGen())
console.log(idGen())


function outerFunction(a){
    return function add(b){
        return a + b
    }
}

const addFive = outerFunction(5)
console.log(addFive(3)); //8


const addTen = outerFunction(10)
console.log(addTen(2)); //12

// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = [
  { id: 1, content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { id: 2, content: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { id: 3, content: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" }
]

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  // TODO: Add the quote object to the quotes array
  quotes.push(quote)
}
// addQuote({ id: 1, content: 'Stay hungry, stay foolish.', author: 'Steve Jobs' })
// addQuote({ id: 2, content: 'Do or do not. There is no try.', author: 'Yoda' })
// addQuote({
//   id: 3,
//   content: 'Simplicity is the ultimate sophistication.',
//   author: 'Leonardo da Vinci'
// })

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  // TODO: Remove the quote object from the array using the given id
  for(let i = 0; i < quotes.length; i++){
    if(id === quotes[i].id){
      quotes.splice(i,i)
    }
  }
}
deleteQuote(2);

console.log(quotes);


/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  for(let i = 0; i < quotes.length; i++){
    if(id === quotes[i].id){
      quotes[i].content = updatedQuote.content
      quotes[i].author = updatedQuote.author
    }
  }

}

updateQuote(1,{ content: 'Stay hungry. Stay foolish.', author: 'Jobs' });

console.log(quotes);
/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  // TODO: Return the quotes array
  return quotes
}

console.log(getAllQuotes());


// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()

// TODO: Delete 1 quote using deleteQuote()

// TODO: Update 1 quote using updateQuote()

// TODO: Print all quotes using getAllQuotes()
