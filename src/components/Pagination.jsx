export default function ResultsNavigation({ totalPages }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 5) {
      pages.push(
        <button key={i} className="px-3 py-1 border-2">
          {i}
        </button>
      );
    } else {
      pages.push(
        <button key={i} className="px-3 py-1 border-y-2 border-l-2">
          {i}
        </button>
      );
    }
  }

  return <div className="flex justify-center my-4">{pages}</div>;
}
