const AddProductFormHeader = ({ formData }) => {
  const isDisabled =
    formData.name &&
    formData.price &&
    formData.description &&
    formData.tags.length > 0;

  return (
    <div className="addProduct-form-header">
      <h3 className="addProduct-form-header-title">상품 등록하기</h3>
      <button
        className="button btn-small-40 addProduct-form-submit-btn"
        type="submit"
        disabled={!isDisabled}
      >
        등록
      </button>
    </div>
  );
};

export default AddProductFormHeader;
