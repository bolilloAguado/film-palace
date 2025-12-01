import { useSearchParams } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import MovieResults from "../components/MovieResults";

export default function ResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return (
    <>
      <div className="flex flex-col max-w-6xl mx-auto text-stone-300">
        <MainHeader />
        <div className="flex items-center">
          <div className="text-2xl font-amatic-sc mb-2">
            Here's the results for: <b>{query}</b>
          </div>
          <hr className="grow border-t-2 ml-2 mb-1 border-stone-600" />
        </div>
        <MovieResults />
      </div>
    </>
  );
}
