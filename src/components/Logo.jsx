import { useNavigate } from "react-router-dom";
export default function Logo() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // para evitar que se recargue la página
    navigate(`/`);
  }

  return (
    <>
      <button className="text-stone-300 cursor-pointer" onClick={handleClick}>
        <div className="text-left font-bold md:text-4xl text-xl -mb-5 font-amatic-sc text-transparent bg-clip-text bg-linear-to-b from-stone-300 to-stone-500">
          Film
        </div>
        <div className="md:text-5xl text-2xl italic lg:ml-6 ml-4 font-dancing-script">
          Palace
        </div>
      </button>
    </>
  );
}
