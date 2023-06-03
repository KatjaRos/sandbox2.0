if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}
function initializeCode() {
  const submitInfo = document.getElementById("submit-data");
  const emptyTable = document.getElementById("empty-table");
  submitInfo.addEventListener("click", function () {
    const table = document.getElementById("users");
    const checkAdmin = document.getElementById("input-admin").value;
    let newRow = document.createElement("tr");

    let usernameTd = document.createElement("td");
    usernameTd.appendChild(
      document.createTextNode(document.getElementById("input-username").value)
    );
    newRow.appendChild(usernameTd);

    let emailTd = document.createElement("td");
    emailTd.appendChild(
      document.createTextNode(document.getElementById("input-email").value)
    );
    newRow.appendChild(emailTd);

    let addressTd = document.createElement("td");
    addressTd.appendChild(
      document.createTextNode(document.getElementById("input-address").value)
    );
    newRow.appendChild(addressTd);

    let adminTd = document.createElement("td");
    let adminMark; //asked a little help from chatGPT in this, got an error because i was using String instead of let
    if (checkAdmin == "on") {
      adminMark = "X";
    } else {
      adminMark = "-";
    }
    adminTd.appendChild(document.createTextNode(adminMark));

    newRow.appendChild(adminTd);
    table.appendChild(newRow);
  });
  emptyTable.addEventListener("click", function () {
    const table = document.getElementById("users");
    var rows = table.rows.length;
    for (var i = rows - 1; i > 0; i--) {
      table.deleteRow(i);
    }
  });
}
