const addBtn = document.querySelector('#btn');
const submitBtn = document.querySelector('#submit-btn');
const container = document.querySelector('#contain');
const library = document.querySelector('.library-books');
const form = document.getElementById('formContainer');
const libShelf = document.getElementById('lib');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const read = document.querySelector('#read');

//Book Class Constructor
class Book {
  constructor(author, title, rd) {
    this.author = author
    this.title = title
    this.rd = rd;
    addBookToLibrary(this);
  }

}
//establish library array 
let myLibrary = [];
book1 = new Book("Sample Author", "Sample Book Title", false);

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

  const readBook = document.createElement('button');
  readBook.classList.add("readBook");
  if (book.rd == true) {
    readBook.textContent = "Read";
    readBook.style.backgroundColor = "#3b82f6";
    readBook.style.color = "white";
    
  } else if (book.rd == false) {
    readBook.textContent = "Not Read";
    readBook.style.backgroundColor = "black";
    readBook.style.color = "white";
  }
  readBook.addEventListener('click', (event) => {
    if (readBook.textContent == "Not Read") {
      readBook.textContent = "Read";
      readBook.style.backgroundColor = "#3b82f6";
      readBook.style.color = "white";
    } else if (readBook.textContent == "Read") {
      readBook.textContent = "Not Read";
      readBook.style.backgroundColor = "black";
      readBook.style.color = "white";
    }
});

  newBook.appendChild(readBook);

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
  let r = read.checked;

  if (author.value == "" || title.value == "") {
    return
  } else {
    new Book(a, t, r);
    author.value = "";
    title.value = "";
    form.style.display = 'none';
  }
});

//event listener for button to make form appear & disappear for submission
addBtn.addEventListener('click', (event) => {
  form.style.display = "block";
});

