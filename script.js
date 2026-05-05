async function loadData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    const data = await response.json();

    console.log("API data:", data);

    updateDashboard(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function updateDashboard(data) {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  let open = 0;
  let completed = 0;

  data.forEach(item => {
    if (item.completed) {
      completed++;
    } else {
      open++;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.title}</td>
      <td>${item.completed ? "Done" : "Open"}</td>
      <td>$User {item.userId}</td>
    `;

    tableBody.appendChild(row);
  });

  document.getElementById("open-count").textContent = open;
  document.getElementById("done-count").textContent = completed;
  document.getElementById("blocked-count").textContent = 0; // placeholder
}

loadData();
