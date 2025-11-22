import "./App.css";
import Calendar from "./components/Calender.jsx";
import Counter from "./components/Counter.jsx";
import MocieList from "./components/MovieList.jsx";
import Timer from "./components/Timer.jsx";

function App() {
  return (
    <div>
      <Timer />
      <Counter />
      <Calendar />
      <MocieList />
    </div>
  );
}

export default App;
