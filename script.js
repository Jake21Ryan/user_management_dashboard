document.addEventListener("DOMContentLoaded", function () {

  const userTableBody = document.querySelector("#userTable tbody");
  const userForm = document.getElementById("userForm");
  const modalElement = document.getElementById("userModal");
  const modal = new bootstrap.Modal(modalElement);

  //  Users will appear here
  let users = [ ];

  function renderUsers() {
    userTableBody.innerHTML = "";
    users.forEach(user => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.username}</td>
        <td>${user.fullname}</td>
        <td>${user.email}</td>
      `;
      userTableBody.appendChild(row);
    });
  }

  // initial render
  renderUsers();

  userForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();

    users.push({ username, fullname, email });
    renderUsers();
    userForm.reset();
    modal.hide();
  });

});
