export default function Card({ image }) {
  return (
    <>
      <div className="h-30 hover:scale-105 lg:max-w-70 rounded-3xl overflow-hidden relative transition-all transition-discrete duration-800 lg:mb-0 mb-4">
        {/* ------ Info card ------ */}
        <div className="h-full absolute bg-linear-to-b from-transparent from-30% to-stone-900 to-100% z-20 w-full hover:opacity-100 opacity-0 transition duration-300 content-end">
            <div className="p-5 text-4xl font-amatic-sc">
                <div className="flex items-center">
                    series name
                    <hr className="grow border-t ml-2 mt-1 border-stone-600" />
                </div>
            </div>
        </div>
        {/* ------ Poster ------ */}
        <img
          src="/defaultImage.png"
          className="h-full w-full object-cover shrink-0"
        />
      </div>
    </>
  );
}
