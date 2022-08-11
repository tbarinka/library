const btn = document.querySelector('#btn');
const submitBtn = document.querySelector('#submit-btn');
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
submitBtn.addEventListener('click', (event) => {
  let a = author.value;
  let t = title.value;
  new Book(a, t);
});

