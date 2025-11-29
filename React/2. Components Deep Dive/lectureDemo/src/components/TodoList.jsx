import { useEffect, useState } from "react";
import TodoItem from "./TodoItem.jsx";

export default function TodoList() {
  const [todos, setTodods] = useState([]);
  const [refresh, setRefresh] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then((response) => response.json())
      .then((result) => {
        setTodods(Object.values(result));
        console.log(Object.values(result));
      })
      .catch((err) => alert(err.message));
  }, [refresh]);

  const completeTaskHandler = (todoId) => {
    console.log(todoId);
    const currentTodo = todos.find((todo) => todo._id === todoId);
    currentTodo.completed = !currentTodo.completed;
    fetch(`http://localhost:3030/jsonstore/todos/${currentTodo._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentTodo),
    })
      .then(() => {
        console.log(currentTodo);
        setRefresh((state) => !state);
        console.log("Done!");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          title={todo.title}
          completed={todo.completed}
          id={todo._id}
          onClick={completeTaskHandler}
        />
      ))}
    </ul>
  );
}
