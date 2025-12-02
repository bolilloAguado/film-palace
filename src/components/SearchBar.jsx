import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      navigate(`/results?query=${encodeURIComponent(title)}`); // Actualiza la URL
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
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
}

