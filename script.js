const addBtn = document.querySelector('#btn');
const submitBtn = document.querySelector('#submit-btn');
const container = document.querySelector('#contain');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const library = document.querySelector('.library-books');
const form = document.getElementById('formContainer');
const libShelf = document.getElementById('lib');

let myLibrary = [];
book1 = new Book("Sam", "Magic Boy");
book2 = new Book("Tony", "Pizza Party");
book3 = new Book("Bobby", "Santa's Holidy");
book4 = new Book("Mario", "Spaghetti Surprise");
//book5 = new Book("Alison", "Bacon Bits");
//book6 = new Book("Vivian", "Monkey Supreme");

//function adds book to myLibrary array
function addBookToLibrary(book) {
  myLibrary.push(book);
  const newBook = document.createElement('div');
  newBook.classList.add("book")
  //newBook.textContent = "\"" + book.title + "\", by " + book.author;
  libShelf.appendChild(newBook);

  const bookTitle = document.createElement('div');
    bookTitle.classList.add("bookTitle");
    bookTitle.textContent = book.title;
    newBook.appendChild(bookTitle);

  const bookAuthor = document.createElement('div');
  bookAuthor.classList.add("bookAuthor");
  bookAuthor.textContent = book.author;
  newBook.appendChild(bookAuthor);

  const removeBtn = document.createElement('button');
  removeBtn.classList.add("removeBtn");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener('click', (event) => {
    libShelf.removeChild(newBook);
    index = myLibrary.findIndex(x => x.title === book.title);
    myLibrary.splice(index, 1);

  });
  newBook.appendChild(removeBtn);

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
      newBook.style.border = "solid black";
      newBook.style.padding = "10px";
      newBook.style.margin = "5px";
      newBook.style.width = "20%";
      newBook.style.height = "40px";
      newBook.textContent = book.title + ", " + book.author;
    libShelf.appendChild(newBook);
  }
};  
//event listener for button that passes form contents to Book constructor
submitBtn.addEventListener('click', (event) => {
  let a = author.value;
  let t = title.value;

  if (author.value == "" || title.value == "") {
    return
  } else if (a.length > 25) {
    alert("Author must be less than 25 characters.");
  } else if (t.length > 25) {
    alert("Title must be less than 25 characters.")
  } else {
    new Book(a, t);
    author.value = "";
    title.value = "";
    form.style.display = 'none';
  }
});

//event listener for button to make form appear & disappear for submission
addBtn.addEventListener('click', (event) => {
  form.style.display = "block";
});

