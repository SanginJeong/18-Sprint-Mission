import ErrorMessage from "../../../../common/ErrorMessage";

const AddItemImage = ({ ref, error, image, onChange, onDelete }) => {
  return (
    <div>
      <h4>상품 이미지</h4>
      <div className="addItem-image-area">
        <label htmlFor="file-upload" className="addItem-image-input">
          <img src="images/ic_plus.svg" />
          <span>이미지 등록</span>
        </label>
        <input
          id="file-upload"
          type="file"
          ref={ref}
          className="addItem-image-input"
          style={{ display: "none" }}
          onChange={onChange}
        />
        {image && (
          <div className="addItem-image-card">
            <button
              type="button"
              className="button ic-x-btn"
              onClick={onDelete}
            >
              <img src="images/ic_x.svg" />
            </button>
            <img src={image} style={{ width: "100%", height: "100%" }} />
          </div>
        )}
      </div>
      {error && <ErrorMessage errorMessage={error} />}
    </div>
  );
};

export default AddItemImage;
