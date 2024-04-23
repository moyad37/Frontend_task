import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import GetFootballData from "./components/GetFootballData/GetFootballData";

function App() {
  return (
    <div className="container mx-auto w-full">
      <Buttons layout="grid" />
      <Buttons layout="flex" />
      <GetFootballData />
    </div>
  );
}

export default App;
