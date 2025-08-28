const AddItemDescription = ({ value, onChange }) => {
  return (
    <div>
      <h4>상품 소개</h4>
      <textarea
        type="text"
        className="addItem-textArea"
        placeholder="상품소개를 입력하세요"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default AddItemDescription;
