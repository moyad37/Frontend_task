import "./App.css";
import Form from "./components/Form/Form";
//import GetData from "./components/GetData/GetData";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";

function App() {
  return (
    <div className="container mx-auto w-full relative">
      <LanguageSelector />
      {/*<Buttons layout="grid" />*/}
      {/*<Buttons layout="flex" />*/}
      {/* <GetData /> */}
      <Form />
    </div>
  );
}

export default App;
