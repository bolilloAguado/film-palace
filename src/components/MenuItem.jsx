export default function MenuItem({ children }) {
  return (
    <>
      <button className="w-full cursor-pointer text-left px-5 py-1 border-b border-stone-600 hover:bg-stone-800/50 transition duration-100">
        {children}
      </button>
    </>
  );
}
