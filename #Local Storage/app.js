// const input = document.querySelector(".form-input");
// const button = document.querySelector(".form-btn");
// const text = document.querySelector(".text");
// const form = document.querySelector(".form");

// const savedName = localStorage.getItem("userName");
// text.textContent = savedName;
// input.value = savedName;

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const name = input.value;
//   localStorage.setItem("userName", name);
//   text.textContent = name;
// });

// consttext = document.querySelector(".text");

// let obj = {
//   name: "Asror",
//   age: 16,
//   city: "Qashqadaryo",
// };

// let strObj = localStorage.setItem("obj", JSON.stringify(obj));

// console.log(obj);
// console.log(strObj);
// text.innerHTML = localStorage.getItem("obj");

// const inputs = document.querySelectorAll(".input");
// const outs = document.querySelectorAll(".out");
// const keys = ["name", "age", "city"];

// keys.forEach((k, i) => {
//   inputs[i].value = localStorage[k] || "";
//   outs[i].textContent = localStorage[k] || "";
// });

// document.querySelector(".form").addEventListener("submit", e => {
//   e.preventDefault();
//   keys.forEach((k, i) => {
//     localStorage[k] = inputs[i].value;
//     outs[i].textContent = inputs[i].value;
//   });
// });

//UY ishi

let elForm = document.querySelector(".form");
let elName = document.querySelector(".inp1");
let elAge = document.querySelector(".inp2");
let elCity = document.querySelector(".inp3");
let userList = document.querySelector(".list");

let array = JSON.parse(localStorage.getItem("users")) || [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let obj = {
    name: elName.value.trim(),
    age: elAge.value.trim(),
    city: elCity.value.trim(),
  };

  array.push(obj);
  localStorage.setItem("users", JSON.stringify(array));
  renderUser([obj]);
  elForm.reset();
});

function renderUser(arr) {
  if (arr.length === 0) return;
  arr.forEach((el) => {
    userList.insertAdjacentHTML(
      "beforeend",
      `
      <li class="user">
        <p><strong>Name:</strong> ${el.name}</p>
        <p><strong>Age:</strong> ${el.age}</p>
        <p><strong>City:</strong> ${el.city}</p>
          <button class="remove-btn">X</button>
      </li>
    `
    );
  });
}

renderUser(array);

userList.addEventListener("click", function (evt) {
  if (evt.target.matches(".remove-btn")) {
    localStorage.removeItem("users", array[0]);
    evt.target.parentElement.remove();
  }
});
