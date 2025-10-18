// Lesson 3 - Events Starter
import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js';

let quotes = []

// Select DOM elements
// const quoteList =
// const form = ...
// const contentInput =
// const authorInput =
// const idInput =
// const randomBtn =
// const randomDisplay =

function clearForm() {
  idInput.value = '';
  contentInput.value = '';
  authorInput.value = '';
}

const quoteList = document.getElementById('quote-list');
const form = document.getElementById('quoteForm');
const contentInput = document.getElementById('content');
const authorInput = document.getElementById('author');
const idInput = document.getElementById('quoteId');
const randomBtn = document.getElementById('randomBtn');
const randomDisplay = document.getElementById('randomQuoteDisplay');

function createQuoteElement(quote) {
  // a quote element example
  //<section id="quote-list">
  //  <div data-id="1">
  //    <p>Confidence comes from discipline and training</p>
  //    <p>Robert</p>
  //    <button class="edit-btn" data-id="1">
  //      Edit
  //    </button>
  //    <button class="delete-btn" data-id="1">
  //      Delete
  //    </button>
  //  </div>
  // </section>

  const quoteDiv = document.createElement('div');
  quoteDiv.setAttribute('data-id', quote.id);

  const contentP = document.createElement('p');
  contentP.textContent = quote.content;

  const authorP = document.createElement('p');
  authorP.textContent = quote.author;

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit-btn');
  editBtn.setAttribute('data-id', quote.id);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.setAttribute('data-id', quote.id);

  const buttonClickHandler = (event) => {
    const target = event.target;
    const quoteId = parseInt(target.getAttribute('data-id'));

    if (target.classList.contains('edit-btn')) {
      const allQuotes = getAllQuotes();
      const quoteToEdit = allQuotes.find(q => q.id === quoteId);
      if (quoteToEdit) {
        idInput.value = quoteToEdit.id;
        contentInput.value = quoteToEdit.content;
        authorInput.value = quoteToEdit.author;
      }
    } else if (target.classList.contains('delete-btn')) {
      const index = deleteQuote(quoteId);
      if (index !== -1) {
        deleteQuoteFromDOM(quoteId);
        if (parseInt(idInput.value) === quoteId) {
          clearForm();
        }
      }
    }
  };

  editBtn.addEventListener('click', buttonClickHandler);
  deleteBtn.addEventListener('click', buttonClickHandler);

  quoteDiv.append(contentP, authorP, editBtn, deleteBtn);
  return quoteDiv;
}

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
  const quoteElement = createQuoteElement(quote);
  quoteList.appendChild(quoteElement);
}
function updateQuoteInDOM(quote) {
  const quoteElement = quoteList.querySelector(`div[data-id="${quote.id}"]`);
  if (quoteElement) {
    quoteElement.children[0].textContent = quote.content;
    quoteElement.children[1].textContent = quote.author;
  }
}
function deleteQuoteFromDOM(id) {
  const quoteElement = quoteList.querySelector(`div[data-id="${id}"]`);
  if (quoteElement) {
    quoteList.removeChild(quoteElement);
  }
}
function renderQuotes() {
  quoteList.innerHTML = '';
  const allQuotes = getAllQuotes();
  allQuotes.forEach(addQuoteToDOM);
}
function showRandomQuote() {
  const allQuotes = getAllQuotes();

  if (allQuotes.length === 0) {
    randomDisplay.textContent = '-- No quotes to show --';
    return;
  }

  const randomIndex = Math.floor(Math.random() * allQuotes.length);
  const randomQuote = allQuotes[randomIndex];

  randomDisplay.textContent = `"${randomQuote.content}" — ${randomQuote.author}`;
}
// Event listeners for form submission, edit, and delete clicks

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const content = contentInput.value.trim();
  const author = authorInput.value.trim();
  const quoteId = idInput.value;

  if (content && author) {
    if (quoteId) {
      const id = parseInt(quoteId);
      const updatedQuote = updateQuote(id, content, author);
      if (updatedQuote) {
        updateQuoteInDOM(updatedQuote);
      }
    } else {
      const newQuote = addQuote(content, author);
      if (newQuote) {
        addQuoteToDOM(newQuote);
      }
    }
    clearForm();
  }
});

randomBtn.addEventListener('click', showRandomQuote);
