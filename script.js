const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const task = input.value;
  if (task) {
    const li = document.createElement("li");
    li.innerText = task;
    li.addEventListener("click", function() {
      li.classList.toggle("completed");
    });
    list.appendChild(li);
    input.value = "";
  }
});
