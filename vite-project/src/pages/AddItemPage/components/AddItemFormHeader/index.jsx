const AddItemFormHeader = ({ formData }) => {
  const isDisabled =
    formData.name &&
    formData.price &&
    formData.description &&
    formData.tags.length > 0;

  return (
    <div className="addItem-form-header">
      <h3 className="addItem-form-header-title">상품 등록하기</h3>
      <button
        className="button btn-small-40 addItem-form-submit-btn"
        type="submit"
        disabled={!isDisabled}
      >
        등록
      </button>
    </div>
  );
};

export default AddItemFormHeader;
