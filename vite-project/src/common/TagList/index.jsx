import TagBadge from "../TagBadge";
import "./TagList.style.css";

const TagList = ({ tags, onDelete }) => {
  return (
    <ul className="tag-area">
      {tags?.map((tag, index) => (
        <li key={tag}>
          <TagBadge
            name={tag}
            onDelete={onDelete ? () => onDelete(index) : undefined}
          />
        </li>
      ))}
    </ul>
  );
};

export default TagList;
