let form = document.querySelector("form");
let userName = document.querySelector(".input_id");
let userPass = document.querySelector(".input_text");
let nimadir = document.querySelector(".text");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  form.onsubmit = function(e){
    e.preventDefault()
    fetch("https://reqres.in/api/login",{
    method:"POST",
    headers : {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
    },
    body: JSON.stringify({
        email: userName.value,
        password: userPass.value,
    }),
})

.then((res)=> res.json())
.then((data) =>console.log(data))

}
})