import React from "react";
import "./Pagination.style.css";

const GROUP_SIZE = 5;

const Pagination = ({ totalCount, page, setPage }) => {
  const TOTAL_PAGE = Math.ceil(totalCount / 10);
  const pageGroup = Math.ceil(page / GROUP_SIZE);
  const pageGroup_last = GROUP_SIZE * pageGroup;
  const pageGroup_first = pageGroup_last - (GROUP_SIZE - 1);

  const pages = [];
  for (let i = 1; i <= TOTAL_PAGE; i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      <button
        onClick={() => setPage(page - 1)}
        className="button pagination-btn"
      >
        <img src="public/images/arrow_left.svg" alt="arrow_left" />
      </button>
      {pages.map((num) => (
        <button className="button pagination-btn">{num}</button>
      ))}
      <button
        onClick={() => setPage(page + 1)}
        className="button pagination-btn"
      >
        <img src="public/images/arrow_right.svg" alt="arrow_right" />
      </button>
    </div>
  );
};

export default Pagination;
