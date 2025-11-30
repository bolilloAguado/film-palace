export default function Card({ image }) {
  return (
    <>
      <div className="h-30 hover:h-40 md:w-70 w-full rounded-3xl overflow-hidden relative transition-all transition-discrete duration-800 md:mb-0 mb-5">
        {/* ------ Info card ------ */}
        <div className="h-full absolute bg-linear-to-b from-transparent from-30% to-stone-900 md:to-40% to-50% z-20 w-full hover:opacity-100 opacity-0 transition duration-300 content-end">
            <div className="p-5 text-4xl font-amatic-sc">
                <div className="flex items-center mt-6">
                    series name
                    <hr className="grow border-t ml-2 mt-1 border-stone-600" />
                </div>
            <p className="text-[16px] font-light font-jost text-justify mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia sed mi ac tristique. Fusce lorem ligula, volutpat nec lorem et, vulputate volutpat dui.
            </p>
            </div>
        </div>
        {/* ------ Poster ------ */}
        <img
          src="https://media.istockphoto.com/id/1069539210/photo/fantastic-autumn-sunset-of-hintersee-lake.jpg?s=612x612&w=0&k=20&c=oqKJzUgnjNQi-nSJpAxouNli_Xl6nY7KwLBjArXr_GE="
          className="h-full w-full object-cover shrink-0"
        />
      </div>
    </>
  );
}
