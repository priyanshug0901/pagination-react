import React, { useState } from 'react';
import './pagination.css';

export default function Pagniation(
  data,
  RenderComponent,
  title,
  pageLimit,
  dataLimit
) {
  const [page] = useState(useState(Math.round(data.length / dataLimit)));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    return setCurrentPage(page => page + 1);
  }

  function goToPreviousPage() {
    // not yet implemented
    return setCurrentPage(page => page - 1);
  }

  function changePage(event) {
    // not yet implemented
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    // not yet implemented
    const strtIdx = currentPage * dataLimit - dataLimit;
    const endIdx = strtIdx + dataLimit;
    console.log(typeof data);
    return data.slice(strtIdx, endIdx);
  };

  const getPaginationGroup = () => {
    // not yet implemented
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      {/* showing 10 posts at a time */}

      <div className="dataContainer">
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>

      {/* show the pagiantion
        it consists of next and previous buttons
        along with page numbers, in our case, 5 page
        numbers at a time
    */}
      <div className="pagination">
        {/* prev button */}
        <button
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={goToPreviousPage}
        >
          prev
        </button>

        {/* pages */}
        {getPaginationGroup().map((item, idx) => (
          <button
            key={idx}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? 'active' : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}

        <button
          className={`next ${currentPage === pages ? 'disabled' : ''}`}
          onClick={goToNextPage}
        >
          next
        </button>
      </div>
    </div>
  );
}
