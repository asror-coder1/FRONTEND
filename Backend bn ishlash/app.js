let users = [];
let editingIndex = null;

function generateID() {
  return Math.floor(1000 + Math.random() * 9000);
}

function createUser() {
  const name = document.getElementById("name").value.trim();
  const job = document.getElementById("job").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!name || !job || !age) return alert("Please fill in all fields.");

  const user = {
    id: generateID(),
    name,
    job,
    age
  };

  if (editingIndex !== null) {
    users[editingIndex] = user;
    editingIndex = null;
  } else {
    users.push(user);
  }

  clearForm();
  renderUsers();
}

function renderUsers() {
  const container = document.getElementById("cardContainer");
  container.innerHTML = "";

  users.forEach((user, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <p><strong>ID:</strong> ${user.id}</p>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Job:</strong> ${user.job}</p>
      <p><strong>Age:</strong> ${user.age}</p>
      <div class="actions">
        <button class="icon-btn" onclick="deleteUser(${index})" title="Delete">
          <i class="fas fa-trash"></i>
        </button>
        <button class="icon-btn edit" onclick="editUser(${index})" title="Edit">
          <i class="fas fa-pen"></i>
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function deleteUser(index) {
  users.splice(index, 1);
  renderUsers();
}

function editUser(index) {
  const user = users[index];
  document.getElementById("name").value = user.name;
  document.getElementById("job").value = user.job;
  document.getElementById("age").value = user.age;
  editingIndex = index;
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("job").value = "";
  document.getElementById("age").value = "";
}
