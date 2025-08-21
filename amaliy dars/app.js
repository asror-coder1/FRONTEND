// let nameInput = document.querySelector("#input-book");
// let yearInput = document.querySelector("#input-year");
// let authorInput = document.querySelector("#input-author");
// let submitBtn = document.querySelector("#btn-submit");
// let table = document.querySelector(".table");
// let books = JSON.parse(localStorage.getItem("books")) || [];
// let i = books.length > 0 ? books[books.length - 1].id + 1 : 0;

// submitBtn.onclick = function () {
//   books.push({
//     id: i++,
//     title: nameInput.value,
//     year: yearInput.value,
//     author: authorInput.value,
//   });
//   showBooks(books);
//   localStorage.setItem("books", JSON.stringify(books));
// };

// function showBooks(array) {
//   table.innerHTML = "";
//   array.forEach((element, index) => {
//     table.insertAdjacentHTML(
//       "beforeend",
//       `
//         <tr>
//           <td>${index + 1}</td>
//           <td>${element.title}</td>
//           <td>${element.year}</td>
//           <td>${element.author}</td>
//           <td>
//             <button data-id="${element.id}" class="btn btn-warning">Edit</button>
//             <button data-id="${element.id}" class="btn btn-danger">Delete</button>
//           </td>
//         </tr>  
//       `
//     );
//   });
// }


// table.addEventListener("click", function (e) {

//   if (e.target.classList.contains("btn-danger")) {
//     let id = Number(e.target.dataset.id);
//     books = books.filter((book) => book.id !== id);
//     localStorage.setItem("books", JSON.stringify(books));
//     showBooks(books);
//   }

 
//   if (e.target.closest(".btn-warning")) {
//     let dataId = Number(e.target.closest(".btn-warning").dataset.id);
//     let deleteBooks = books.filter((el) => el.id !== dataId);
//     console.log(deleteBooks);
//     showBooks(deleteBooks);
//     localStorage.setItem("books", JSON.stringify(deleteBooks));
//   }

//   window.deleteBook = function(index) {
//     if (confirm("Haqiqatan ham o‘chirmoqchimisiz?")) {
//       books.splice(index, 1); 
//       renderTable(); 
//     }
//   };
  
// });

// showBooks(books);




let nameInput = document.querySelector("#input-book");
let yearInput = document.querySelector("#input-year");
let authorInput = document.querySelector("#input-author");
let submitBtn = document.querySelector("#btn-submit");
let table = document.querySelector(".table");

let books = JSON.parse(localStorage.getItem("books")) || [];
let i = books.length > 0 ? books[books.length - 1].id + 1 : 0;

let editMode = false;
let editId = null;

submitBtn.onclick = function () {
  if (editMode) {

    books = books.map((book) =>
      book.id === editId
        ? {
            ...book,
            title: nameInput.value,
            year: yearInput.value,
            author: authorInput.value,
          }
        : book
    );
    editMode = false;
    editId = null;
  } else {
 
    books.push({
      id: i++,
      title: nameInput.value,
      year: yearInput.value,
      author: authorInput.value,
    });
  }

  localStorage.setItem("books", JSON.stringify(books));
  showBooks(books);


  nameInput.value = "";
  yearInput.value = "";
  authorInput.value = "";
};

function showBooks(array) {
  table.innerHTML = "";
  array.forEach((element, index) => {
    table.insertAdjacentHTML(
      "beforeend",
      `
        <tr>
          <td>${index + 1}</td>
          <td>${element.title}</td>
          <td>${element.year}</td>
          <td>${element.author}</td>
          <td>
            <button data-id="${element.id}" class="btn btn-warning">Edit</button>
            <button data-id="${element.id}" class="btn btn-danger">Delete</button>
          </td>
        </tr>  
      `
    );
  });
}

table.addEventListener("click", function (e) {
 
  if (e.target.classList.contains("btn-danger")) {
    let id = Number(e.target.dataset.id);
    books = books.filter((book) => book.id !== id);
    localStorage.setItem("books", JSON.stringify(books));
    showBooks(books);
  }


  if (e.target.classList.contains("btn-warning")) {
    let id = Number(e.target.dataset.id);
    let bookToEdit = books.find((book) => book.id === id);
    if (bookToEdit) {
      nameInput.value = bookToEdit.title;
      yearInput.value = bookToEdit.year;
      authorInput.value = bookToEdit.author;
      editMode = true;
      editId = id;
    }
  }
});

showBooks(books);
