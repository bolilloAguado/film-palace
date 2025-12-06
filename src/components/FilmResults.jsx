import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FilmItem from "./FilmItem";
import { useState } from "react";
import Pagination from "./Pagination";
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export default function FilmResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [gridView, setGridView] = useState(true);

  const fetchFilms = async ({ queryKey }) => {
    const [_key, query, page] = queryKey;
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${VITE_API_KEY}&s=${query}&page=${page}`
    );
    return response.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["films", query, page],
    queryFn: fetchFilms,
    keepPreviousData: true,
  });

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    setSearchParams({ query, page: pageNumber });
  };

  return (
    <div className="text-2xl">
      <header className="flex items-center mb-2">
        <p>
          Results for: <b>{query}</b>
        </p>
        <hr className="grow border-t-2 mx-2 border-stone-600" />
        <div className="flex items-center gap-2">
          <p>Order as:</p>
          <button
            onClick={() => setGridView(true)}
            title="Grid view"
            className="cursor-pointer hover:scale-115 transition duration-100"
          >
            <i className="bxs bx-grid text-3xl" />
          </button>
          <button
            onClick={() => setGridView(false)}
            title="List view"
            className="cursor-pointer hover:scale-115 transition duration-100"
          >
            <i className="bxs bx-list text-4xl" />
          </button>
        </div>
      </header>

      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Error loading films."
      ) : data?.Error === "Movie not found!" ? (
        <p>
          No results found for <b>{query}</b>
        </p>
      ) : (
        <div
          className={
            gridView
              ? "grid lg:grid-cols-5 grid-cols-2 gap-5"
              : "flex flex-col gap-5"
          }
        >
          {data?.Search?.map((item) => (
            <FilmItem
              key={item.imdbID}
              id={item.imdbID}
              title={item.Title}
              poster={item.Poster}
              year={item.Year}
              gridView={gridView}
            />
          ))}
        </div>
      )}

      <Pagination
        totalResults={data?.totalResults}
        currentPage={page}
        onPageChange={
          data?.Error === "Movie not found!" ? () => {} : handlePageChange
        }
      />
    </div>
  );
}
