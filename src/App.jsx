
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admission from "./Compenents/landingpage/Admission";
import Result from "./Compenents/landingpage/Result";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admission />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;

