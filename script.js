const btn = document.querySelector('#store-btn');
const container = document.querySelector('#contain');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const library = document.querySelector('.library-books');

let myLibrary = [];

//function adds book to myLibrary array
function addBookToLibrary(book) {
  myLibrary.push(book);
}

//Book Constructor

function Book(author, title) {
  this.author = author
  this.title = title
  addBookToLibrary(this)
}


//loop through library  
function loopLibrary() {
  for (let book of myLibrary) {
    console.log(book.title + ", by " + book.author);
  }
}

//produce div of book
btn.addEventListener('click', (event) => {
    
});

//button event listener
//bring up a form with: author, title
//let form-input call Book function
//link to addBookToLibrary function


btn.addEventListener('click', function() {
    const div = document.createElement('div');
    div.textContent = prompt("What is your name?");
    container.appendChild("div");
})