const btn = document.querySelector('#store-btn')

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


btn.addEventListener('click', function() {
    alert("hey!");
})