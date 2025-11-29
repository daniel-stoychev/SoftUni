import { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem.jsx";

export default function TodoList() {
  const [todos, setTodods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then((response) => response.json())
      .then((result) => {
        setTodods(Object.values(result));
      })
      .catch((err) => alert(err.message));
  }, []);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo._id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
}
