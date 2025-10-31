import Todo from "../Todo";
import { TodoItem } from "@/types/global";
import { MouseEvent } from "react";
import styles from "./TodoList.module.css";

interface TodoListProps {
  todos: TodoItem[];
  onCheckboxClick: () => void;
}

const TodoList = ({ todos, onCheckboxClick }: TodoListProps) => {
  return (
    <ul className={styles.ul}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo
            id={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            onCheckboxClick={onCheckboxClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
