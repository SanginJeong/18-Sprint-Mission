const AddProductPrice = ({ value, onChange }) => {
  return (
    <div>
      <h4>판매가격</h4>
      <input
        type="number"
        className="addProduct-input"
        placeholder="판매가격을 입력하세요"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default AddProductPrice;
