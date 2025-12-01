import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import MovieItem from "./MovieItem";

export default function MovieResults() {
  const { isLoading, data } = useContext(DataContext);

  return (
    <>
      <div className="grid lg:grid-cols-4 gap-5">
        {!isLoading
          ? data.map((item, index) => (
              <MovieItem 
                key={index} 
                id={item.imdbID}
                poster={item.Poster} />
            ))
          : ""}
      </div>
    </>
  );
}
