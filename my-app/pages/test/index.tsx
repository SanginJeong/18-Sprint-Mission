import { deleteTodo } from "@/api/deleteTodo";
import { getTodos } from "@/api/getTodos";
import { postTodo } from "@/api/postTodo";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Todo from "@/components/Todo";
import TodoList from "@/components/TodoList";
import { TodoItem } from "@/types/global";
import { useEffect, useState } from "react";

const Components = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const fetchData = async () => {
    try {
      const items = await getTodos();
      setTodos(items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAppendClick = async () => {
    await postTodo({ name: "테스트x" });
    await fetchData();
  };

  const handleDeleteClick = async () => {
    try {
      const res = await deleteTodo({ itemId: 8623 });
      console.log(res);
      await fetchData();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <Layout>
      <div style={{ padding: "40px 0px" }}>
        <Button variants="append" onClick={handleAppendClick} />
        <Button variants="delete" onClick={handleDeleteClick} />
        <Button variants="update" />
      </div>
      <div style={{ padding: "40px 0px" }}>
        <Badge variants="todo" />
        <Badge variants="done" />
      </div>
      <div style={{ padding: "40px 0px" }}>
        <CheckBox isCompleted={false} />
        <CheckBox isCompleted={true} />
      </div>
      <div style={{ padding: "40px 0px" }}>
        <TodoList
          todos={todos}
          onTodoClick={() => console.log("Todo")}
          onCheckboxClick={(e) => {
            e.stopPropagation();
            console.log("체크박스");
          }}
        />
      </div>

      <Header />
    </Layout>
  );
};

export default Components;
