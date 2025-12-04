import { useSearchParams } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import FilmResults from "../components/FilmResults";

export default function ResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return (
    <div className="flex flex-col max-w-6xl mx-auto text-stone-300 font-amatic-sc p-5">
      <MainHeader />
      <FilmResults />
    </div>
  );
}

