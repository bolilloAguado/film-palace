import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FilmItem from "./FilmItem";

export default function FilmResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const getMovies = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=6260c921&s=${query}`
    );
    return await response.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["movies", query],
    queryFn: getMovies,
  });

  return (
    <div className="text-2xl">
      <header className="flex items-center mb-2">
        {console.log(data)}
        <p>
          Results for: <b>{query}</b>
        </p>
      </header>

      {isLoading ?
        "Loading..."
      : error ?
        "Error loading films."
      : data?.Error === "Movie not found!" ?
        <p>No results found for <b>{query}</b></p>
      : (
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-5">
          {data?.Search?.map((item) => (
            <FilmItem
              key={item.imdbID}
              id={item.imdbID}
              title={item.Title}
              poster={item.Poster}
              year={item.Year}
              gridView={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
