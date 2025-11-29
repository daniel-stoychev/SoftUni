import { Route, Routes } from "react-router";
import "./App.css";
import About from "./Components/About.jsx";
import NotFound from "./Components/NotFound.jsx";
import City from "./Components/City.jsx";

function App() {
  return (
    <div>
      <h1>React router</h1>
      <Routes>
        <Route path="/" element={<h1>This is Home page!</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/city/:city" element={<City />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
