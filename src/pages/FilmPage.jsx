import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import SquarePill from "../components/SquarePill";
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export default function FilmPage() {
  const { id } = useParams();

  const fetchMovie = async ({ queryKey }) => {
    const [_key, id] = queryKey;
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${VITE_API_KEY}&i=${id}`
    );
    return response.json();
  };

  const { data } = useQuery({
    queryKey: ["film", id],
    queryFn: fetchMovie,
  });

  const image = data?.Poster === "N/A" ? "/defaultImage.png" : data?.Poster;
  const imageNotFoundHandler = (e) => (e.target.src = "/defaultImage.png");

  return (
    <div className="flex flex-col p-5 max-w-6xl h-screen mx-auto">
      <MainHeader />
      <div className="flex flex-1 m-auto items-center justify-center py-5">
        <div className="lg:flex gap-5 lg:h-110 items-center">
          <img
            src={image}
            onError={imageNotFoundHandler}
            className="rounded-2xl flex-1 lg:w-70 w-full lg:mb-0 object-cover"
          />
          <div className="flex flex-col grow lg:w-150">
            <div className="flex items-center justify-center">
              <div className="text-4xl mb-1 ml-2">{data?.Title}</div>
              <hr className="grow border-t-2 border-stone-600 mx-2 lg:block hidden" />
            </div>
            <div className="rounded-2xl bg-stone-800 hover:bg-stone-700/40 transition duration-200 p-6 font-varela-round text-sm">
              <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 mb-4 justify-items-center">
                <SquarePill focusContent={data?.imdbRating} title={"IMDb"} />
                <SquarePill
                  focusContent={data?.Metascore}
                  title={"Metascore"}
                />
                <SquarePill focusContent={data?.Year} />
                <SquarePill focusContent={data?.Rated} />
              </div>
              {data?.Plot}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
