export default function SquarePill({ focusContent, title=null }) {
  return (
    <div>
      <div className={`flex flex-col items-center justify-center bg-stone-900 rounded-xl h-20 w-25 text-3xl`}>
        {focusContent}
        {title != null ? <p className="text-sm">{title}</p> : null}
      </div>
    </div>
  );
}
