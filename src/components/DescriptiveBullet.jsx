export default function DescriptiveBullet(props) {
  const { content } = props;
  
  return (
    <div className="rounded-full my-8 outline-3 outline-stone-300 outline-offset-3 text-lg font-semibold font-varela-round bg-stone-300 w-10 h-10 flex items-center justify-center">
      {content}
    </div>
  );
}
