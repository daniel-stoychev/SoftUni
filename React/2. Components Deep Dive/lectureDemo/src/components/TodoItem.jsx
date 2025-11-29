import styles from "./TodoItem.module.css";

export default function TodoItem({ _id, title, completed }) {
  return <li className={completed && styles["todo-completed"]}>{title}</li>;
}
