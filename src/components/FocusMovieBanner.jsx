import DescriptiveBullet from "./DescriptiveBullet";
import bannerImg from "../assets/chainsaw-man-the-3840x2160-23013.jpg";
import characterDoll from "../assets/RezeHD.png";
import Logo from "../assets/CSMlogo.png";

export default function FocusMovieBanner() {
  return (
    <>
      <div className="relative w-full md:h-130 h-60 rounded-3xl overflow-hidden border-5 border-stone-900 grayscale-70">
        {/* Background image */}
        <img
          src={bannerImg}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent from-20% to-stone-900 to-80% z-10" />

        {/* Decorative border */}
        <div className="absolute inset-0 p-8">
          <div className="w-full h-full border-3 border-stone-300 rounded-3xl" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-4 pl-15 relative z-10 text-white h-full">
          <div className="bg-transparent md:p-5 rounded col-span-7 flex drop-shadow-[15px_10px_rgba(0,0,0,0.7)] h-100">
            <img src={Logo} alt="Logo" className="object-contain" />
          </div>
          <div className="col-span-4 md:block hidden">
            <img
              src={characterDoll}
              alt="Banner"
              className="inset-0 w-full h-370 object-cover drop-shadow-[0_15px_20px_rgba(0,0,0,1)]"
            />
          </div>
          <div className="col-span-1 py-15 pl-5 justify-center text-stone-900">
            <DescriptiveBullet content="+17" tooltip="content" />
            <DescriptiveBullet content="A" />
            <DescriptiveBullet content="B" />
          </div>
        </div>
      </div>
    </>
  );
}
