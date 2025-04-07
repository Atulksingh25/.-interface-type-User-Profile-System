let todos = [];
function addTodo() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
    if (task === "")
        return;
    const newTodo = {
        id: Date.now(),
        task,
        completed: false,
    };
    todos.push(newTodo);
    input.value = "";
    renderTodos();
}
function toggleTodo(id) {
    todos = todos.map(todo => todo.id === id ? Object.assign(Object.assign({}, todo), { completed: !todo.completed }) : todo);
    renderTodos();
}
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}
function renderTodos() {
    const list = document.getElementById("todoList");
    list.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.className = todo.completed ? "completed" : "";
        li.innerHTML = `
      ${todo.task}
      <button onclick="toggleTodo(${todo.id})">✅</button>
      <button onclick="deleteTodo(${todo.id})">❌</button>
    `;
        list.appendChild(li);
    });
}
