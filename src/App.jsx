import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import ResultsPage from "./pages/ResultsPage";
import "./App.css";


function App() {
  return(
    <Router>
      {/* <nav>
        <Link to="/">Index</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
