import React from 'react';

const Pagination = (props) => {
  return (
    <>
      <button onClick={props.previousPage}>Previous</button>
      <button onClick={props.pageChange}>Next</button>
    </>
  ) 
}

export default Pagination;