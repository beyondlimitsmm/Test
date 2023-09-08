const Pagination = () => {
  return (
    <div className="pagination typo-body-2 flex justify-center items-center mb-[60px]">
      <a className="flex justify-center items-center gap-2" href="#">
        <span>&laquo;</span>Prev
      </a>
      <a className="active" href="#">
        1
      </a>
      <a className="" href="#">
        2
      </a>
      <a className="" href="#">
        3
      </a>
      <a className="" href="#">
        4
      </a>
      <a className="hidden xl:block" href="#">
        5
      </a>
      <a className="hidden xl:block" href="#">
        6
      </a>
      <a className="flex justify-center items-center gap-2" href="#">
        Next<span>&raquo;</span>
      </a>
    </div>
  );
};
export default Pagination;
