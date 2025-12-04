import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function FilmPage() {
  const { id } = useParams();

  const fetchMovie = async ({ queryKey }) => {
    const [_key, id] = queryKey;
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=6260c921&i=${id}`
    );
    return response.json();
  };

  const { data } = useQuery({
    queryKey: ["film", id],
    queryFn: fetchMovie,
  });

  return (
    <div className="flex border-2 justify-center items-center h-screen p-5">
      <img src={data?.Poster} className="rounded-lg h-100 w-80 object-cover"/>
      text
    </div>
  );
}
