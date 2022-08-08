const btn = document.querySelector('#store-btn');
const container = document.querySelector('#contain');

let myLibrary = [];

function Book(name, author) {
  this.name = name
  this.author = author
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

//button event listener
//bring up a form with: author, title
//let form-input call Book function
//link to addBookToLibrary function


btn.addEventListener('click', function() {
    const div = document.createElement('div');
    div.textContent = prompt("What is your name?");
    container.appendChild("div");
})