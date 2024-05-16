import "./App.css";
import Formm from "./components/Form/Form";
import GetData from "./components/GetData/GetData";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import Buttons from "./components/Buttons/Buttons";
function App() {
  return (
    <div className="container mx-auto w-full relative">
      <LanguageSelector />
      {/* <Buttons layout="grid" /> */}
      {/* <Buttons layout="flex" /> */}
      {/* <GetData /> */}
      <Formm />
    </div>
  );
}

export default App;
