const btn = document.querySelector('#store-btn');
const container = document.querySelector('#contain');

let myLibrary = [];

//Book Constructor

function Book(author, title) {
  this.author = author
  this.title = title
}

//function adds book to myLibrary array
function addBookToLibrary(book) {
  myLibrary.push(book);
}

  //book1 = new Book("Sam", "Wunderkind");
  //book2 = new Book("Bob", "Magic Boy");
  //addBookToLibrary(book1);
  //addBookToLibrary(book2);

function loopLibrary() {
  for (let book of myLibrary) {
    console.log(book.title + ", by " + book.author);
  }
}

//loop through myLibrary


//button event listener
//bring up a form with: author, title
//let form-input call Book function
//link to addBookToLibrary function


btn.addEventListener('click', function() {
    const div = document.createElement('div');
    div.textContent = prompt("What is your name?");
    container.appendChild("div");
})