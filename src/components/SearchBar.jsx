import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export default function SearchBar() {
  const [title, setTitle] = useState("");
  const { setQuery, error } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // para evitar que se recargue la página
    setQuery(title);

    if (title.trim() !== "") {
      // redirige a la página de resultados, con el título del query
      navigate(`/results?query=${encodeURIComponent(title)}`);
    }
  };

  return (
    <>
      <div className="relative">
        <i className="bxs bx-search absolute ml-4 mt-2 text-stone-400" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search a movie..."
            className="w-full pl-10 pr-4 py-1 rounded-full outline-none border-2 border-stone-500 text-stone-400 text-sm font-varela-round bg-stone-800 hover:bg-stone-700/50 focus:bg-stone-700/80 transition duration-100"
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}
