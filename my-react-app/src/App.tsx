import "./App.css";
import Buttons from "./components/Buttons/Buttons";

function App() {
  return (
    <div className="container mx-auto">
      <Buttons layout="grid" />
      <Buttons layout="flex" />
    </div>
  );
}

export default App;
