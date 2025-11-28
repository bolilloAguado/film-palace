export default function SearchBar() {
  return (
    <>
      <i className="bxs bx-search text-stone-400 mr-[-33px] z-20" />
        <input
          type="text"
          placeholder="Search a movie..."
          className="md:w-md w-60 pl-10 pr-4 py-1 rounded-full outline-none border-2 border-stone-500 text-stone-400 bg-stone-800 hover:bg-stone-700 focus:bg-stone-700"
        />
    </>
  );
}