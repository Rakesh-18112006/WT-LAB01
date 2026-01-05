const todos = [];

const saveTodo = (event) => {
  event.preventDefault();

  const taskInputElem = document.getElementById("taskInput");
  const dateInputElem = document.getElementById("dateInput");
  const timeInputElem = document.getElementById("timeInput");
  const priorityInputElem = document.getElementById("priorityInput");

  const todoInput = taskInputElem.value;
  const todoDate = dateInputElem.value;
  const todoTime = timeInputElem.value;
  const todoPriority = priorityInputElem.value;
  const todo = {
    name: todoInput,
    date: todoDate,
    time: todoTime,
    priority: todoPriority,
  };
  console.log(todo);

  if (todo.name) {
    todos.push(todo);
  }

  taskInputElem.value = "";
  dateInputElem.value = "";
  timeInputElem.value = "";
  priorityInputElem.value = "";
  showTodos();
};

const showTodos = () => {
  const todoSection = document.getElementById("taskList");
 
  todoSection.innerHTML = "";
  todos.forEach((todo, index) => {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todoItem";
    todoDiv.innerHTML = `
            <h3>${todo.name}</h3>
            <p>Date: ${todo.date}</p>
            <p>Time: ${todo.time}</p>
            <p>Priority: ${todo.priority}</p>
            <button onclick="deleteTodo(${index})"> Delete</button>
        `;
    todoSection.appendChild(todoDiv);
  });
};

const deleteTodo = (index) => {
     todos.splice(index, 1);
    showTodos();

}