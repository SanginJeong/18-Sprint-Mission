import { MouseEvent } from "react";
import styles from "./Todo.module.css";
import CheckBox from "../CheckBox";

export interface TodoItem {
  id: number;
  isCompleted: boolean;
  name: string;
}

interface TodoProps extends TodoItem {
  onTodoClick: () => void;
  onCheckboxClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Todo = ({
  id,
  isCompleted,
  name,
  onTodoClick,
  onCheckboxClick,
  ...props
}: TodoProps) => {
  return (
    <span
      className={`${styles.todo} ${isCompleted && styles.done} font-regular-16`}
      onClick={onTodoClick}
      aria-label="todo"
    >
      <CheckBox isCompleted={isCompleted} onClick={onCheckboxClick} />
      <span aria-label={name}>{name}</span>
    </span>
  );
};

export default Todo;
