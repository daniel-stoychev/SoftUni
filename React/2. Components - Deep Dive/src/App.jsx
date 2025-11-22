import "./App.css";
import Calendar from "./components/Calender.jsx";
import Counter from "./components/Counter.jsx";
import MocieList from "./components/MovieList.jsx";
import Timer from "./components/Timer.jsx";

import TyperSection from "./components/TyperSection.jsx";

function App() {
  return (
    <div>
      <Timer />
      <Counter />
      <Calendar />
      <MocieList />
      <TyperSection />
    </div>
  );
}

export default App;
