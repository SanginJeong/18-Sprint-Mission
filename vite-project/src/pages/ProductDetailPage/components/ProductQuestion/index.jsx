import { useState } from "react";

const ProductQuestion = () => {
  const [textAreaValue, setTextAreaValue] = useState("");

  return (
    <>
      <div className="productDetail-question-category-textarea">
        <h3 className="product-info-category">문의하기</h3>
        <textarea
          value={textAreaValue}
          onChange={(e) => setTextAreaValue(e.target.value)}
          className="productDetail-question-textarea"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
      </div>
      <div className="add-question-btn-area">
        <button
          className="button btn-small-40 add-question-btn"
          disabled={!textAreaValue}
        >
          등록
        </button>
      </div>
    </>
  );
};

export default ProductQuestion;
