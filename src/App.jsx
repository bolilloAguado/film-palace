import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import ResultsPage from "./pages/ResultsPage";
import FilmPage from "./pages/FilmPage";
import "./App.css";

function App() {
  return (
    <div className="text-stone-300 font-amatic-sc">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/film/:id" element={<FilmPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
