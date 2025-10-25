import Badge from "@/components/Badge";
import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Todo from "@/components/Todo";
import TodoList from "@/components/TodoList";

const Components = () => {
  return (
    <Layout>
      <div style={{ padding: "40px 0px" }}>
        <Button variants="append" />
        <Button variants="delete" />
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
          todos={[
            { id: 0, name: "비타민 챙겨먹기", isCompleted: false },
            { id: 0, name: "비타민 챙겨먹기", isCompleted: true },
          ]}
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
