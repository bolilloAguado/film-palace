import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function DecoHeader() {
  return (
    <>
      <div className="flex w-full md:mb-5 mb-3 items-center">
        <Logo />
        <hr className="grow-3 border-t-2 ml-4 mr-7 border-stone-600" />
        <div className="grow-2">
          <SearchBar />
        </div>
      </div>
    </>
  );
}
