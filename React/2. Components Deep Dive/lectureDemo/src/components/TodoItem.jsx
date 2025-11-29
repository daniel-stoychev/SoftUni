import styles from "./TodoItem.module.css";

export default function TodoItem({ id, title, completed, onClick }) {
  const classes = [styles["pointer"]];
  if (completed) {
    classes.push(styles["todo-completed"]);
  }

  return (
    <li onClick={() => onClick(id)} className={classes.join(" ")}>
      {title}
    </li>
  );
}
