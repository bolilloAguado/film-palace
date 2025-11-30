import { useState } from "react";
import MenuItem from "./MenuItem";

export default function Accordion({ icon, title, children }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
      <button
        className="w-full pl-5 pr-3 py-1 border-b-2 text-[27px] border-stone-600 hover:bg-stone-800/50 transition duration-100 flex items-center justify-between cursor-pointer"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <div className="flex">
          <div className="mt-2 mr-4 text-xl">{icon}</div>
          {title}
        </div>
        <i className="bxs bx-chevron-down" />
      </button>

      <div
        className={`text-[24px] overflow-hidden transition-all duration-100 ease-in-out
    ${accordionOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {children}
      </div>
    </>
  );
}
