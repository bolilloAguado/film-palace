import "./App.css";
import MainHeader from "./components/MainHeader";
import Carousel from "./components/Carousel";
import Subheader from "./components/Subheader";
import Menu from "./components/Menu";
import Accordion from "./components/Accordion";
import MenuItem from "./components/MenuItem";
import img1 from "../src/assets/chainsaw-man-the-3840x2160-23013.jpg";

function App() {
  const slides = [
    img1,
    "https://media.istockphoto.com/id/1069539210/photo/fantastic-autumn-sunset-of-hintersee-lake.jpg?s=612x612&w=0&k=20&c=oqKJzUgnjNQi-nSJpAxouNli_Xl6nY7KwLBjArXr_GE=",
    "https://st2.depositphotos.com/1491329/11367/i/450/depositphotos_113672526-Beautiful-nature-scene.jpg",
  ];

  return (
    <>
      <div className="flex flex-col max-w-6xl mx-auto text-stone-300 font-amatic-sc grayscale-50">
        <MainHeader />
        <div className="w-max md:px-5 px-3 md:pb-3 pb-2 rounded-md bg-stone-900 md:ml-10 ml-5 md:mb-[-35px] mb-[-15px] z-20 md:text-3xl font-dancing-script">
          Now trending in Movie Palace...
        </div>
        <Carousel>
          {slides.map((slide) => (
            <img src={slide} className="object-cover w-full shrink-0" />
          ))}
        </Carousel>

        <Subheader>Popular series</Subheader>
        <div className="md:flex gap-8 h-full">
          <Menu>
            <Accordion 
              icon={<i className="bxs bx-film" />} 
              title="Genre"
            >
              <MenuItem>Action</MenuItem>
            </Accordion>

            <Accordion
              icon={<i className="bxs bx-calendar-alt-2" />}
              title="Year"
            >
              <MenuItem>2025</MenuItem>
            </Accordion>

            <Accordion icon={<i className="bxs bx-book" />} title="Type">
              <MenuItem>Movie</MenuItem>
            </Accordion>
          </Menu>

          <div className="grow mb-0">content</div>
        </div>
      </div>
    </>
  );
}

export default App;
