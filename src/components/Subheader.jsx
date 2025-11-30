export default function Subheader({ children: title }) {
  return (
    <>
      <div className="flex w-full items-center my-6">
        <hr className="grow border-t-2 mt-1 border-stone-600" />
        <div className="md:text-5xl text-4xl mx-4">{title}</div>
        <hr className="grow border-t-2 mt-1 border-stone-600" />
      </div>
    </>
  );
}
