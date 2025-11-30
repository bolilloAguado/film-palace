import { useEffect, useState } from "react";

export default function Carousel({ children: slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () =>
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );

  const nextSlide = () =>
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <div className="overflow-hidden relative w-full md:max-h-100 rounded-4xl">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides}
        </div>

        <div className="text-5xl absolute inset-0 flex justify-between items-center p-4">
          <button
            className="cursor-pointer px-1 rounded-full bg-white/40 hover:bg-white/50 transition duration-200"
            onClick={prevSlide}
          >
            <i className="bxs bx-chevron-left mt-1" />
          </button>
          <button
            className="cursor-pointer px-1 rounded-full bg-white/40 hover:bg-white/50 transition duration-200"
            onClick={nextSlide}
          >
            <i className="bxs bx-chevron-right mt-1" />
          </button>
        </div>

        <div className="absolute bottom-4 p-4 left-0 right-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, slide) => (
              <div
                className={`transition w-2 h-2 rounded-full ${
                  currentSlide === slide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
