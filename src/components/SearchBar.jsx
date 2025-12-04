import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/results?query=${query}&page=1`); // Updates the URL and navigates to the result page
    }
  };

  return (
    <div className="relative">
      <i className="bxs bx-search absolute ml-4 mt-2 text-stone-400" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a movie..."
          className="w-full pl-10 pr-4 py-1 rounded-full outline-none border-2 border-stone-500 text-stone-400 text-sm font-varela-round bg-stone-800 hover:bg-stone-700/50 focus:bg-stone-700/80 transition duration-100"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

