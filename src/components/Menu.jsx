export default function Menu({ children }) {
  return (
    <>
      <div className="flex justify-center lg:w-60 relative">
        <div className="text-center mx-5 absolute lg:text-4xl text-3xl bg-stone-900 z-40">
          What do you feel like discovering today?
        </div>
        <div className="w-full py-10 border-2 border-stone-600 z-20 lg:mt-23 mt-13 overflow-hidden overflow-y-scroll
        [&::-webkit-scrollbar]:w-0.5
        [&::-webkit-scrollbar-thumb]:bg-stone-500
          [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-track]:bg-transparent">
          <hr className="grow border-t-2 border-stone-600" />
          {children}
        </div>
      </div>
    </>
  );
}
