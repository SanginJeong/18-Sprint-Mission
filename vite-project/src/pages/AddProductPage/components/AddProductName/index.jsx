const AddProductName = ({ value, onChange }) => {
  return (
    <div>
      <h4>상품명</h4>
      <input
        type="text"
        className="addProduct-input"
        placeholder="상품명을 입력하세요"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default AddProductName;
