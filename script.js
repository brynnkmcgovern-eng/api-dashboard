const data = [
  { title: "Fix login bug", status: "Open" },
  { title: "Improve load time", status: "Blocked" },
  { title: "Refactor API", status: "Done" }
];

// Update counts
document.getElementById("open-count").textContent = 1;
document.getElementById("blocked-count").textContent = 1;
document.getElementById("done-count").textContent = 1;

// Populate table
const tableBody = document.getElementById("table-body");
tableBody.innerHTML = "";

data.forEach(item => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${item.title}</td>
    <td>${item.status}</td>
  `;

  tableBody.appendChild(row);
});
