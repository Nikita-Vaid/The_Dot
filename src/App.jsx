
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admission from "./Compenents/landingpage/Admission";
import Result from "./Compenents/landingpage/Result";
// import Faculty from "./Compenents/landingpage/Faculty";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admission />} />
        <Route path="/result" element={<Result />} />
        {/* <Route path="/facuilty" element={<Faculty/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;

