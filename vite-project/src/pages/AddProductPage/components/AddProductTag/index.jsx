import ErrorMessage from "../../../../common/ErrorMessage";

const AddProductTag = ({ value, onChange, error }) => {
  return (
    <div>
      <h4>태그</h4>
      <input
        type="text"
        className="addItem-input"
        placeholder="태그를 입력하세요"
        value={value}
        onChange={onChange}
      />
      {error && <ErrorMessage errorMessage={error} />}
    </div>
  );
};

export default AddProductTag;
