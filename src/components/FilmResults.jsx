import { useSearchParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import FilmItem from "./FilmItem";
import ResultsNavigation from "./ResultsNavigation";

export default function FilmResults() {
  const { setQuery, isLoading, data } = useContext(DataContext);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [gridView, setGridView] = useState(true);

  useEffect(() => {
    if (query) {
      setQuery(query); // Sincroniza contexto con la URL
    }
  }, [query, setQuery]);

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
            className="cursor-pointer mt-2 hover:scale-115 transition duration-100"
            onClick={() => setGridView(true)}
            title="Grid view"
          >
            <i className="bxs bx-grid text-3xl" />
          </button>
          <button
            className="cursor-pointer mt-2 hover:scale-115 transition duration-100"
            onClick={() => setGridView(false)}
            title="List view"
          >
            <i className="bxs bx-list text-4xl" />
          </button>
        </div>
      </header>

      <div
        className={`grid ${
          gridView ? `lg:grid-cols-5 grid-cols-2` : `grid-cols-1`
        } gap-5 transition duration-200`}
      >
        {!isLoading
          ? data?.map((item, index) => (
              <FilmItem
                key={index}
                id={item.imdbID}
                title={item.Title}
                poster={item.Poster}
                year={item.Year}
                gridView={gridView}
              />
            ))
          : "Loading films..."}
      </div>
      <ResultsNavigation />
    </div>
  );
}
