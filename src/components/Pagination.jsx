import ReactPaginate from "react-paginate";

export default function Pagination({ totalResults, onPageChange }) {
  const totalPages = Math.ceil(totalResults / 10) || 0;

  const handlePageClick = (e) => {
    const newPage = e.selected + 1;
    onPageChange(newPage);
  };

  return (
    <div>
      <ReactPaginate
        previousLabel={<span className="mx-1 px-3 hover:bg-stone-700 transition duration-100 cursor-pointer rounded-md">{"<"}</span>}
        nextLabel={<span className="mx-1 px-3 hover:bg-stone-700 transition duration-100 cursor-pointer rounded-md">{">"}</span>}
        breakLabel={"..."}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="flex w-full justify-center items-center mt-3"
        pageClassName="mx-1 px-3 hover:bg-stone-700 transition duration-100 cursor-pointer rounded-md"
        activeClassName="bg-stone-600"
      />
    </div>
  );
}

