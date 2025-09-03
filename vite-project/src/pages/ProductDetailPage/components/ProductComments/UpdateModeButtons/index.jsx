const UpdateModeButtons = ({ onUpdate }) => {
  return (
    <div className="product-info-update-btn-area">
      <button onClick={onUpdate} className="button">
        취소
      </button>
      <button className="button btn-small-40 product-info-update-btn">
        수정 완료
      </button>
    </div>
  );
};

export default UpdateModeButtons;
