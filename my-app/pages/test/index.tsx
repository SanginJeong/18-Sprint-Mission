import Badge from "@/components/Badge";
import Button from "@/components/Button";

const Components = () => {
  return (
    <div>
      <div style={{ padding: "40px 0px" }}>
        <Button variants="append" />
        <Button variants="delete" />
        <Button variants="update" />
      </div>
      <div style={{ padding: "40px 0px" }}>
        <Badge variants="todo" />
        <Badge variants="done" />
      </div>
    </div>
  );
};

export default Components;
