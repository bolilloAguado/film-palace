import MainHeader from "../components/MainHeader";
import Carousel from "../components/Carousel";
import Subheader from "../components/Subheader";
import Menu from "../components/Menu";
import Accordion from "../components/Accordion";
import MenuItem from "../components/MenuItem";
import Card from "../components/Card";
import img1 from "../assets/chainsaw-man-the-3840x2160-23013.jpg";

export default function Index() {
  const slides = [
    img1,
    "https://media.istockphoto.com/id/1069539210/photo/fantastic-autumn-sunset-of-hintersee-lake.jpg?s=612x612&w=0&k=20&c=oqKJzUgnjNQi-nSJpAxouNli_Xl6nY7KwLBjArXr_GE=",
    "https://st2.depositphotos.com/1491329/11367/i/450/depositphotos_113672526-Beautiful-nature-scene.jpg",
  ];

  return (
    <>
      <div className="flex flex-col max-w-6xl mx-auto text-stone-300 font-amatic-sc grayscale-50 pb-6">
        <MainHeader />
        <div className="w-max lg:px-5 px-3 lg:pb-3 pb-2 rounded-md bg-stone-900 lg:ml-10 ml-5 lg:-mb-10 -mb-5 z-20 lg:text-3xl font-dancing-script">
          Now trending in Film Palace...
        </div>
        <Carousel>
          {slides.map((slide) => (
            <img src={slide} className="object-cover w-full shrink-0" />
          ))}
        </Carousel>

        <Subheader>Popular series</Subheader>
        <div className="lg:flex gap-8 h-100">
          <Menu className="w-1/3">
            <Accordion icon={<i className="bxs bx-film" />} title="Genre">
              <MenuItem>Action</MenuItem>
              <MenuItem>Adventure</MenuItem>
              <MenuItem>Animation</MenuItem>
              <MenuItem>Anime</MenuItem>
              <MenuItem>Comedy</MenuItem>
              <MenuItem>Crime</MenuItem>
              <MenuItem>Documental</MenuItem>
              <MenuItem>Drama</MenuItem>
              <MenuItem>Family</MenuItem>
              <MenuItem>Fantasy</MenuItem>
              <MenuItem>Horror</MenuItem>
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

          <div className="pb-5 grow">
            <div
              className="flex-1 lg:grid grid-cols-3 gap-5 px-3 lg:my-0 my-5 max-h-100 overflow-hidden overflow-y-scroll
              [&::-webkit-scrollbar]:w-[3px]
            [&::-webkit-scrollbar-thumb]:bg-stone-600
              [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-track]:bg-stone-950"
            >
              <Card></Card>
              <Card></Card>
              <Card></Card>

              <Card></Card>
              <Card></Card>
              <Card></Card>

              <Card></Card>
              <Card></Card>
              <Card></Card>

              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
