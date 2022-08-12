const addBtn = document.querySelector('#btn');
const submitBtn = document.querySelector('#submit-btn');
const container = document.querySelector('#contain');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const library = document.querySelector('.library-books');
const form = document.getElementById('form');
const libShelf = document.getElementById('lib');

let myLibrary = [];
book1 = new Book("Sam", "Magic Boy");
book2 = new Book("Tony", "Pizza Party");

//function adds book to myLibrary array
function addBookToLibrary(book) {
  myLibrary.push(book);
}
//Book Constructor
function Book(author, title) {
  this.author = author
  this.title = title
  addBookToLibrary(this);
}

//loop through library  
function loopLibrary() {
  for (let book of myLibrary) {
    const newBook = document.createElement('div');
    newBook.textContent = book.title + ", " + book.author;
    libShelf.appendChild(newBook);
    //create a div
    //add book info to div
    //append div to libShelf

  }
};   loopLibrary();

//event listener for button that passes form contents to Book constructor
submitBtn.addEventListener('click', (event) => {
  let a = author.value;
  let t = title.value;
  new Book(a, t);
  author.value = "";
  title.value = "";
  form.style.display = 'none';
});

//event listener for button to make form appear & disappear for submission
addBtn.addEventListener('click', (event) => {
  form.style.display = "block";
});

