import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const Pagination = () => {
    const itemsPerPage=5;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
  return (
    <div className='custom-pagination pt-4 pb-8'> <ReactPaginate
    breakLabel="..."
    nextLabel="Next &nbsp; -->"
    onPageChange={handlePageClick}
    pageRangeDisplayed={5}
    pageCount={pageCount}
    previousLabel="<--  &nbsp; Previous"
    renderOnZeroPageCount={null}
    containerClassName={"flex justify-center mt-4"}
    pageLinkClassName={
      "text-gray-500 hover:bg-gray-800 hover:text-green-800 px-6 py-4 rounded-lg "
    }
    activeLinkClassName={
      "bg-gray-800 text-green-700 rounded-lg "
    }
    breakClassName={"mx-1"}
    breakLinkClassName={
      "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 px-3 py-1 rounded-lg mx-1"
    }
    disabledClassName={"opacity-50 cursor-not-allowed"}
    // onPageChange={() => {}}
    
  />
  
  </div>
  )
}

export default Pagination