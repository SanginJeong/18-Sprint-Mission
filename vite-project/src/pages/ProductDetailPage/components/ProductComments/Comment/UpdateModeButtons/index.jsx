const UpdateModeButtons = ({ onCancel, onComplete }) => {
  return (
    <div className="product-info-update-btn-area">
      <button onClick={onCancel} className="button">
        취소
      </button>
      <button
        onClick={onComplete}
        className="button btn-small-40 product-info-update-btn"
      >
        수정 완료
      </button>
    </div>
  );
};

export default UpdateModeButtons;
