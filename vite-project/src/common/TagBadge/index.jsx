import "./TagBadge.style.css";

const TagBadge = ({ name, onDelete }) => {
  return (
    <div className="tag-badge">
      <span>#{name}</span>
      <button className="button tag-delete-badge-btn" onClick={onDelete}>
        <img src="images/ic_x.svg" alt="태그 삭제 이미지" />
      </button>
    </div>
  );
};

export default TagBadge;
