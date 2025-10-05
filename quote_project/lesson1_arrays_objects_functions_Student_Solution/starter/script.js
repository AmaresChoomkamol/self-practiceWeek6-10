const quotes = [
  { id: 1, content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { id: 2, content: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { id: 3, content: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" }
]

let nextId = 1
function addQuote(content, author) {
    let newQuote = {
        id: nextId++,
        content: content,
        author: author
    };
    quotes.push(newQuote)
    return newQuote
}

function deleteQuote(id) {
    let index = quotes.findIndex(quote => quote.id === id);
    if(index !== -1){
        quotes.splice(index,1);
        return true;
    }
    return false
}

function updateQuote(id, content, author) {
    let quoteUpdate = quotes.find(quote => quote.id === id)
    if(quoteUpdate) {
        quoteUpdate.content = content
        quoteUpdate.author = author
    }
    return quoteUpdate
}

function getAllQuotes() {
    return quotes
}

// Test your functions below
// TODO: Add 3 quotes using addQuote()
console.log(addQuote('Stay hungry, stay foolish.', 'Steve Jobs'))
console.log(addQuote('Do or do not. There is no try.', 'Yoda'))
console.log(
  addQuote('Simplicity is the ultimate sophistication.', 'Leonardo da Vinci')
)

// TODO: Delete 1 quote using deleteQuote()
console.log(deleteQuote(2))

// TODO: Update 1 quote using updateQuote()
console.log(updateQuote(1, 'Stay hungry. Stay foolish.', 'Jobs'))

// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes())
