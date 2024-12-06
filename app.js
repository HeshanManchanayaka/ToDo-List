document.getElementById("addtaskbtn").addEventListener("click", addTask);
window.addEventListener("load", showTask);
function addTask() {
  let task = document.getElementById("addtask").value;
  document.getElementById(
    "task"
  ).innerHTML += `<div class="card mb-3"  style="width: 18rem;">
  <div class="card-body ">
    <p class="card-text">${task}</p>
    <a  class="btn btn-primary done-btn" >Done</a>
    <a  class="btn btn-primary delete-btn" >Delete</a>
  </div>`;

  saveData();
  completeTask();
  deleteTask();
  addtask.value = "";
}

function completeTask() {
  document.querySelectorAll(".done-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("checked");
      this.textContent = this.textContent === "Done" ? "Complete" : "Done";
      this.closest(".done-btn").classList.toggle("btn-danger");
    });
  });
}

function deleteTask() {
    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        this.closest(".card").remove();
        saveData();
      });
    });
  }

function saveData() {
  localStorage.setItem("tasks", document.getElementById("task").innerHTML);
}
function showTask() {
  document.getElementById("task").innerHTML = localStorage.getItem("tasks");
  completeTask();
  deleteTask();
}

document.getElementById("clearbtn").addEventListener("click", function () {
    localStorage.clear(); 
    document.getElementById("task").innerHTML = ""; 
  });
  