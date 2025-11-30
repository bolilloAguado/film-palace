import Accordion from "./Accordion";
import MenuItem from "./MenuItem";

export default function Menu({ children }) {
  return (
    <>
      <div className="flex justify-center md:w-60 relative">
        <div className="text-center mx-5 absolute md:text-4xl text-3xl bg-stone-900 z-40">
          What do you feel like discovering today?
        </div>
        <div className="w-full py-10 border-2 border-stone-600 rounded-4xl z-20 md:mt-23 mt-13">
          <hr className="grow border-t-2 border-stone-600" />
          {children}
        </div>
      </div>
    </>
  );
}
