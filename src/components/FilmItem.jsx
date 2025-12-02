import { Link } from "react-router-dom";

export default function FilmItem({ id, poster, title, year, gridView }) {
  const image = poster === "N/A" ? "/defaultImage.png" : poster;

  const imageNotFoundHandler = (e) => (e.target.src = "/defaultImage.png");

  return (
    <Link to={`/film/${id}`}>
      <div
        className={`flex relative ${
          gridView ? "flex-col hover:scale-105" : "hover:scale-103"
        } lg:h-70 h-50 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ease-in-out`}
        title={title}
      >
        <div
          className={`flex-1 z-20 hover:opacity-100 opacity-0 transition duration-200 ${
            gridView ? "lg:text-2xl text-xl" : "lg:text-4xl text-2xl"
          } text-shadow-lg/50`}
        >
          <div className="flex items-end h-full">
            <div className="h-35 pt-8 px-3 w-full bg-linear-to-b from-transparent from-5% to-stone-900 to-90%">
              <div
                className={`font-semibold ${
                  gridView ? "line-clamp-1" : "line-clamp-2"
                }`}
              >
                {title}
              </div>
              <div className={`${gridView ? "text-xl" : "text-2xl"}`}>
                {year}
              </div>
            </div>
          </div>
        </div>

        <img
          src={image}
          className={`h-full absolute w-full object-cover shrink-0`}
          onError={imageNotFoundHandler}
        />
      </div>
    </Link>
  );
}
 
