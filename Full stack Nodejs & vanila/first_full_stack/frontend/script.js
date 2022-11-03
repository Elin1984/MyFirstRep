const tableBody = document.querySelector("[data-table-body]");
const END_POINT = "http://localhost:3000/";

// axios
function getAllUsers() {
  fetch(END_POINT + "all")
    .then((res) => res.json())
    .then((users) => addUsersToTable(users));
}

function addUsersToTable(users) {
  console.log(users);
  const usersElement = users.map(
    (user) => `
        <tr>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
        </tr>
    `
  );

  tableBody.innerHTML = usersElement.join("");
}

window.addEventListener("DOMContentLoaded", getAllUsers);
