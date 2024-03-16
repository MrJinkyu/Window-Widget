{
  const todoForm = document.querySelector("#todo-form")! as HTMLFormElement;
  const todoInput = todoForm.querySelector("#todo-input")! as HTMLInputElement;
  const todoList = document.querySelector("#todo-list")! as HTMLUListElement;

  let todos: Todo[] = [];

  type Todo = { id: string; text: string; checked: boolean };
  const TODOS_KEY = "todos";

  function checkedToDoItem(e: Event) {
    const target = e.target! as HTMLInputElement;
    const item = target.parentElement! as HTMLLIElement;
    if (target.checked) {
      item.classList.add("checked");
      todos = todos.map((todo) =>
        todo.id === item.id ? { ...todo, checked: true } : todo
      );
      localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    } else {
      item.classList.remove("checked");
      todos = todos.map((todo) =>
        todo.id === item.id ? { ...todo, checked: false } : todo
      );
      localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    }
  }

  function deletedToDoItem(e: Event) {
    const target = e.target! as HTMLElement;
    const item = target.parentElement! as HTMLLIElement;
    item.remove();
    todos = todos.filter((todo) => todo.id !== item.id);
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }

  function createToDo(todo: Todo) {
    const li = document.createElement("li");
    li.setAttribute("id", todo.id);
    li.setAttribute(
      "class",
      `${todo.checked ? "todo-item checked" : "todo-item"}`
    );

    const checkInput = document.createElement("input");
    checkInput.setAttribute("type", "checkbox");
    checkInput.textContent = "✓";
    checkInput.addEventListener("click", checkedToDoItem);
    li.appendChild(checkInput);

    const span = document.createElement("span");
    span.setAttribute("class", "todo-text");
    span.textContent = todo.text;
    li.appendChild(span);

    const deleteButton = document.createElement("i");
    deleteButton.setAttribute("class", "fa-solid fa-trash-can");
    deleteButton.addEventListener("click", deletedToDoItem);

    if (todo.checked) {
      checkInput.checked = true;
    }
    li.appendChild(deleteButton);

    todoList.prepend(li);
  }

  function handleToDoSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (todoInput.value.trim().length < 2) {
      alert("공백(띄어쓰기)를 포함하지 않고 2자 이상 입력해주세요!");
      return;
    }
    const todoValue = todoInput.value;
    const newToDo: Todo = {
      id: String(Date.now()),
      text: todoValue,
      checked: false,
    };
    createToDo(newToDo);
    todos.push(newToDo);
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    todoInput.value = "";
    todoInput.focus();
  }

  const saveTodos = localStorage.getItem(TODOS_KEY);

  if (saveTodos !== null) {
    const todosParse = JSON.parse(saveTodos);
    todos = todosParse;
    todos.forEach((todo: Todo) => {
      createToDo(todo);
    });
  }

  todoForm.addEventListener("submit", handleToDoSubmit);
}
