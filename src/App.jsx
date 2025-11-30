import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./pages";
import "./App.css";


function App() {
  return(
    <Router>
      {/* <nav>
        <Link to="/">Index</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
