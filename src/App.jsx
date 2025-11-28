import "./App.css";
import MainHeader from "./components/MainHeader";
import FocusMovieBanner from "./components/FocusMovieBanner";

function App() {
  return (
    <>
      <div className="flex flex-col max-w-6xl mx-auto items-center">
        <MainHeader />
        <FocusMovieBanner />
      </div>
    </>
  );
}

export default App;
