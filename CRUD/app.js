// fetch - serverda ma'lumot almashish uchun ishlatiladi

// 1. Read (GET) – Ma’lumotni o‘qish

fetch("https://reqres.in/api/users/2", {
  headers: {
    "x-api-key": "reqres-free-v1",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
//====================================================
// 2. Create (POST) – Yangi ma’lumot qo‘shish

fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "x-api-key": "reqres-free-v1",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Asror",
    job: "developer",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
//==================================================
//3. Update (PUT/PATCH) – Ma’lumotni yangilash

fetch("https://reqres.in/api/users/2", {
  method: "PUT",
  headers: {
    "x-api-key": "reqres-free-v1",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Ansor",
    job: "teacher",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
//==================================================
//4. Delete (DELETE) – Ma’lumotni o‘chirish

fetch("https://reqres.in/api/users/2", {
  method: "DELETE",
  headers: {
    "x-api-key": "reqres-free-v1",
  },
}).then((res) => console.log(res));
