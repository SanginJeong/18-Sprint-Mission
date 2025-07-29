import React from "react";
import "./Pagination.style.css";

const Pagination = ({ GROUP_SIZE, totalCount, page, setPage }) => {
  const TOTAL_PAGE = Math.ceil(totalCount / 10);
  const pageGroup = Math.ceil(page / GROUP_SIZE);
  const pageGroup_last = Math.min(GROUP_SIZE * pageGroup, TOTAL_PAGE); // 5, 10, 15, ----
  const pageGroup_first = Math.max(pageGroup_last - (GROUP_SIZE - 1), 1); // 1, 6 ,11, ---

  const pages = [];
  for (let i = pageGroup_first; i <= pageGroup_last; i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      <button
        onClick={() => setPage(page - 1)}
        className="button pagination-btn"
        disabled={page === 1}
      >
        <img src="public/images/arrow_left.svg" alt="arrow_left" />
      </button>
      {pages.map((num) => (
        <button
          onClick={() => setPage(num)}
          className={`button pagination-btn ${page === num ? "active" : ""}`}
        >
          {num}
        </button>
      ))}
      <button
        onClick={() => setPage(page + 1)}
        className="button pagination-btn"
        disabled={page === TOTAL_PAGE}
      >
        <img src="public/images/arrow_right.svg" alt="arrow_right" />
      </button>
    </div>
  );
};

export default Pagination;
