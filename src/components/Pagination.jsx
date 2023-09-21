const Pagination = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination typo-body-2 flex justify-center items-center mb-[60px]">
      {currentPage > 1 && (
        <li
          className={`flex justify-center items-center gap-2 cursor-pointer ${
            currentPage === 1 ? "disabled" : ""
          }`}
          onClick={previousPage}
        >
          <span>&laquo;</span>Prev
        </li>
      )}
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`cursor-pointer ${currentPage === number ? "active" : ""}`}
          onClick={() => paginate(number)}
        >
          {number}
        </li>
      ))}
      {currentPage < pageNumbers.length && (
        <li
          className={`flex justify-center items-center gap-2 cursor-pointer ${
            currentPage === pageNumbers.length ? "disabled" : ""
          }`}
          onClick={nextPage}
        >
          Next<span>&raquo;</span>
        </li>
      )}
    </div>
  );
};
export default Pagination;
