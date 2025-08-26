const AddItemTag = ({ value, onChange }) => {
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
    </div>
  );
};

export default AddItemTag;
