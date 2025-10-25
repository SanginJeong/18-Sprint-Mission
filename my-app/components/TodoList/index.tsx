import Todo, { TodoItem } from "../Todo";
import { MouseEvent } from "react";
import styles from "./TodoList.module.css";

interface TodoListProps {
  todos: TodoItem[];
  onTodoClick: () => void;
  onCheckboxClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const TodoList = ({ todos, onTodoClick, onCheckboxClick }: TodoListProps) => {
  return (
    <ul className={styles.ul}>
      {todos.map((todo) => (
        <li>
          <Todo
            id={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            onCheckboxClick={onCheckboxClick}
            onTodoClick={onTodoClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
