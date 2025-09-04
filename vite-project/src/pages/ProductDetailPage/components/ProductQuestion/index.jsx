import { useState } from "react";
import { QUESTION_PLACEHOLDER } from "../../../../constants/PLACEHOLDER";

const ProductQuestion = () => {
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="productDetail-question-category-textarea">
        <h3 className="product-info-category">문의하기</h3>
        <textarea
          value={textAreaValue}
          onChange={(e) => setTextAreaValue(e.target.value)}
          className="productDetail-question-textarea"
          placeholder={QUESTION_PLACEHOLDER}
        />
      </div>
      <form onSubmit={handleSubmitQuestion} className="add-question-btn-area">
        <button
          className="button btn-small-40 add-question-btn"
          disabled={!textAreaValue.trim()}
        >
          등록
        </button>
      </form>
    </>
  );
};

export default ProductQuestion;
