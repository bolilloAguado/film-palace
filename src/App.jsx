import "./App.css";
import MainHeader from "./components/MainHeader";
import Carousel from "./components/Carousel";

function App() {
  const slides = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHyhiYLisFNSSrwfoYQVsMmKnOPdeB_AZNQ&s",
    "https://media.istockphoto.com/id/1069539210/photo/fantastic-autumn-sunset-of-hintersee-lake.jpg?s=612x612&w=0&k=20&c=oqKJzUgnjNQi-nSJpAxouNli_Xl6nY7KwLBjArXr_GE=",
    "https://st2.depositphotos.com/1491329/11367/i/450/depositphotos_113672526-Beautiful-nature-scene.jpg",
  ];

  return (
    <>
      <div className="flex flex-col max-w-6xl mx-auto items-center">
        <MainHeader />
        <Carousel>
          {slides.map((slide) => (
            <img src={slide} className="object-cover w-full shrink-0" />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default App;
